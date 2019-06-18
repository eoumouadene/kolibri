export const PageNames = {
  MANAGE_CONTENT_PAGE: 'MANAGE_CONTENT_PAGE',
  MANAGE_PERMISSIONS_PAGE: 'MANAGE_PERMISSIONS_PAGE',
  USER_PERMISSIONS_PAGE: 'USER_PERMISSIONS_PAGE',
  DEVICE_INFO_PAGE: 'DEVICE_INFO_PAGE',
  DEVICE_SETTINGS_PAGE: 'DEVICE_SETTINGS_PAGE',
};

export const ContentWizardPages = {
  AVAILABLE_CHANNELS: 'AVAILABLE_CHANNELS',
  LOADING_CHANNEL_METADATA: 'LOADING_CHANNEL_METADATA',
  SELECT_CONTENT: 'SELECT_CONTENT',
  SELECT_CONTENT_TOPIC: 'SELECT_CONTENT_TOPIC',
  SELECT_DRIVE: 'SELECT_DRIVE',
  SELECT_IMPORT_SOURCE: 'SELECT_IMPORT_SOURCE',
  SELECT_NETWORK_ADDRESS: 'SELECT_NETWORK_ADDRESS',
};

export const TaskTypes = {
  REMOTECHANNELIMPORT: 'REMOTECHANNELIMPORT',
  REMOTECONTENTIMPORT: 'REMOTECONTENTIMPORT',
  REMOTE_IMPORT: 'REMOTECONTENTIMPORT',
  LOCALCHANNELIMPORT: 'DISKCHANNELIMPORT',
  LOCAL_IMPORT: 'DISKCONTENTIMPORT',
  LOCAL_EXPORT: 'DISKEXPORT',
  DELETE_CHANNEL: 'DELETECHANNEL',
};

export const TaskStatuses = {
  IN_PROGRESS: 'INPROGRESS',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  PENDING: 'PENDING',
  RUNNING: 'RUNNING',
  QUEUED: 'QUEUED',
  SCHEDULED: 'SCHEDULED',
  CANCELED: 'CANCELED',
  CANCELING: 'CANCELING',
};

export const TransferTypes = {
  LOCALEXPORT: 'localexport',
  LOCALIMPORT: 'localimport',
  PEERIMPORT: 'peerimport',
  REMOTEIMPORT: 'remoteimport',
};

// maps to possible network applications that we import/export content from
export const ApplicationTypes = {
  KOLIBRI: 'kolibri',
  STUDIO: 'studio',
};

export const ContentWizardErrors = {
  INVALID_PARAMETERS: 'INVALID_PARAMETERS',
  CHANNEL_NOT_FOUND_ON_SERVER: 'CHANNEL_NOT_FOUND_ON_SERVER',
  CHANNEL_NOT_FOUND_ON_DRIVE: 'CHANNEL_NOT_FOUND_ON_DRIVE',
  CHANNEL_NOT_FOUND_ON_STUDIO: 'CHANNEL_NOT_FOUND_ON_STUDIO',
  KOLIBRI_STUDIO_UNAVAILABLE: 'KOLIBRI_STUDIO_UNAVAILABLE',
  DRIVE_IS_NOT_WRITEABLE: 'DRIVE_IS_NOT_WRITEABLE',
  DRIVE_NOT_FOUND: 'DRIVE_NOT_FOUND',
  DRIVE_ERROR: 'DRIVE_ERROR',
  TRANSFER_IN_PROGRESS: 'TRANSFER_IN_PROGRESS',
  TREEVIEW_LOADING_ERROR: 'TREEVIEW_LOADING_ERROR',
  NETWORK_LOCATION_DOES_NOT_EXIST: 'NETWORK_LOCATION_DOES_NOT_EXIST',
  NETWORK_LOCATION_UNAVAILABLE: 'NETWORK_LOCATION_UNAVAILABLE',
  NETWORK_LOCATION_DOES_NOT_HAVE_CHANNEL: 'NETWORK_LOCATION_DOES_NOT_HAVE_CHANNEL',
};

export const ErrorTypes = {
  CONTENT_DB_LOADING_ERROR: 'CONTENT_DB_LOADING_ERROR',
  TREEVIEW_LOADING_ERROR: 'TREEVIEW_LOADING_ERROR',
  CHANNEL_TASK_ERROR: 'CHANNEL_TASK_ERROR',
};

export const ContentSources = {
  LOCAL_DRIVE: 'local',
  KOLIBRI_STUDIO: 'network',
  PEER_KOLIBRI_SERVER: 'PEER_KOLIBRI_SERVER',
};

export const pageNameToModuleMap = {
  [PageNames.MANAGE_CONTENT_PAGE]: 'manageContent',
  [PageNames.MANAGE_PERMISSIONS_PAGE]: 'managePermissions',
  [PageNames.USER_PERMISSIONS_PAGE]: 'userPermissions',
  [PageNames.DEVICE_INFO_PAGE]: 'deviceInfo',
};
