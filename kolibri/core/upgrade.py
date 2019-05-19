from importlib import import_module

from django.apps import apps
from semver import match
from semver import VersionInfo

import kolibri
from kolibri.utils.version import get_version_and_operator_from_range
from kolibri.utils.version import normalize_version_to_semver


CURRENT_VERSION = VersionInfo.parse(normalize_version_to_semver(kolibri.__version__))


class VersionUpgrade(object):
    """
    Class for version upgrade operations
    """
    __slots__ = ['OLD_VERSION', 'NEW_VERSION', 'upgrade']

    def __init__(self, old_version=None, new_version=None, upgrade=None):
        # Semver version range specification for the previous version
        # of Kolibri when this should be applied.
        # If None - should be applied to all.
        self.OLD_VERSION = old_version
        try:
            assert self._old
        except AssertionError:
            raise TypeError("Unparseable semver version or range passed to upgrade object for old_version")
        # Semver version range specification for the new version
        # of Kolibri when this should be applied.
        # If None - should be applied to all.
        self.NEW_VERSION = new_version
        try:
            assert self._new
        except AssertionError:
            raise TypeError("Unparseable semver version or range passed to upgrade object for new_version")
        if not callable(upgrade):
            raise TypeError("Upgrade argument must be a function or other callable")
        self.upgrade = upgrade

    def __call__(self):
        return self.upgrade()

    def __eq__(self, other):
        return self.__class__ == other.__class__

    def __ne__(self, other):
        return self.__class__ != other.__class__

    def __lt__(self, other):
        return ((self._old, self._new) < (other._old, other._new))

    def __le__(self, other):
        return ((self._old, self._new) <= (other._old, other._new))

    def __gt__(self, other):
        return ((self._old, self._new) > (other._old, other._new))

    def __ge__(self, other):
        return ((self._old, self._new) >= (other._old, other._new))

    @property
    def _old(self):
        """
        Property used for sorting.
        """
        return self._get_version(self.OLD_VERSION)

    @property
    def _new(self):
        """
        Property used for sorting.
        """
        return self._get_version(self.NEW_VERSION)

    def _get_version(self, version):
        if version:
            try:
                _, version = get_version_and_operator_from_range(version)
                return VersionInfo.parse(version)
            except TypeError:
                return None
        return CURRENT_VERSION


def version_upgrade(old_version=None, new_version=None):
    """
    Function decorator for convenient instantiation of version upgrade objects
    from the upgrade function. As the version upgrade object is callable, this
    should provide transparent use of the underlying upgrade function.
    """

    def wrapper(upgrade):
        return VersionUpgrade(old_version=old_version, new_version=new_version, upgrade=upgrade)

    return wrapper


def matches_version(version, version_range):
    if version_range is None or not version:
        return True
    version = normalize_version_to_semver(version)
    version_range = "".join(get_version_and_operator_from_range(version_range))
    return match(version, version_range)


def get_upgrades():
    version_upgrades = []
    for app_config in apps.get_app_configs():
        try:
            upgrade_module = import_module(".upgrade", app_config.module.__name__)
            version_upgrades += [
                upgrade
                for upgrade in upgrade_module.__dict__.values()
                # Only import instances of version upgrade
                if isinstance(upgrade, VersionUpgrade)
                # Only import instances defined in this module
                and upgrade.__module__ == upgrade_module.__name__
            ]
        except ImportError:
            pass
    return version_upgrades


def run_upgrades(old_version, new_version):

    def filter_upgrade(upgrade):
        return (
            # Only import upgrades that match the old version
            # that is being upgraded from
            matches_version(old_version, upgrade.OLD_VERSION)
            # Only import upgrades that match the new version
            # that is being upgraded to
            and matches_version(new_version, upgrade.NEW_VERSION)
        )
    for version_upgrade in sorted(filter(filter_upgrade, get_upgrades())):
        version_upgrade()
