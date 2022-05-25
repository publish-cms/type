import { IUser } from 'user';

export class IApp {
  id: string;
  uniqueId?: string;
  name?: string;
  prefix?: string;
  secret?: string;
  status?: EAppStatus | string;
  deleted?: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  ownerId?: string;
  user?: IUser;
  appMeta?: IAppMeta[];
  appRole?: IAppRole;
  appPermission?: IAppPermission;
}

export class IAppMeta {
  id: string;
  key?: string;
  value?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  app?: IApp;
}
export class IAppRole {
  id: string;
  name?: string;
  permissions?: string[];
  appId?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  app?: IApp;
  roleUsers?: IAppRoleUser[];
  parentId?: string;
  type?: number; // 1. Allow Inherit // 2. Deny Inherit
  parent?: IAppRole;
}

export class IAppRoleUser {
  id: string;
  appRoleId?: string;
  userId?: string;
  appRole?: IAppRole;
  user?: IUser;
}

export class IAppPermission {
  id: string;
  key?: EAppPermissionKey | string;
  appId?: string;
  app?: IApp;
  userId?: string;
  user?: IUser;
}

export enum EAppStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export enum EAppPermissionKey {
  ADMIN = 'ADMIN',
  MANAGE = 'MANAGE',
  READ = 'READ',
}
