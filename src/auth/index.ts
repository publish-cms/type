export enum EAppPatternName {
  APP_CREATE_APP = 'app_create_app',
  APP_GET_APP_INFO = 'app_get_app_info',
  APP_EDIT_APP = 'app_edit_app',
  APP_GET_APPS = 'app_get_apps',
  APP_PERMISSION_CREATE_APP_PERMISSION = 'app_permission_create_app_permission',
  APP_PERMISSION_EDIT_APP_PERMISSION = 'app_permission_edit_app_permission',
  APP_PERMISSION_DELETE_APP_PERMISSION = 'app_permission_delete_app_permission',
  APP_PERMISSION_GET_APP_PERMISSION = 'app_permission_get_app_permission',
}

export enum EAuthPatternName {
  AUTH_GET_ME = 'auth_get_me',
  AUTH_SIGN_IN = 'auth_sign_in',
  AUTH_SIGNUP = 'auth_sign_up',
  AUTH_FORGOT_PASSWORD = 'auth_forgot_password',
  AUTH_RESET_PASSWORD = 'auth_reset_password',
  AUTH_CHANGE_PASSWORD = 'auth_change_password',
  AUTH_REFRESH_TOKEN = 'AUTH_SIGNIN_GOOGLE',
  AUTH_PARTY_CONNECT = 'auth_party_connect',
  AUTH_WALLET_CONNECT = 'auth_wallet_connect',
  AUTH_PARTY_VERIFY = 'auth_party_verify',
  AUTH_PARTY_DISCONNECT = 'auth_party_disconnect',
  AUTH_GET_USER_PARTY = 'auth_get_user_party',
}

export enum EnumEmailPatternName {
  EMAIL_SEND = 'email_send',
  EMAIL_SEND_TEST = 'email_send_test',
  EMAIL_GET = 'email_get',
  EMAIL_UPDATE = 'email_update',
  EMAIL_FIND_MANY = 'email_find_many',
  EMAIL_FIND_BY_ID = 'email_find_by_id',
}

export enum ERolePatternName {
  ROLE_FIND_MANY = 'role_find_many',
  ROLE_CREATE = 'role_create',
  ROLE_DELETE = 'role_delete',
  ROLE_ADD_USER = 'role_add_user',
  ROLE_UPDATE = 'role_update',
  ROLE_REMOVE_USER = 'role_remove_user',
  ROLE_GET_INHERIT = 'role_get_inherit',
  ROLE_FIND_MANY_USER = 'role_find_many_user',
  ROLE_FIND_ONE = 'role_find_one',
}

export enum EUserPatternName {
  USER_FIND_ONE = 'user_find_one',
  USER_FIND_MANY = 'user_find_many',
  USER_FIND_MANY_BASIC = 'user_find_many_basic',
  USER_CREATE = 'user_create',
  USER_UPDATE = 'user_update',
  USER_SUBSCRIBER = 'user_subscriber',
  CHECK_USER_SUBSCRIBER = 'check_user_subscriber',
}
