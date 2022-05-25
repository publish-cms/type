import { IApp, IAppPermission, IAppRole } from 'app';
import { IMedia } from 'media';
import { IParty } from 'party';
import { ISubscriber } from 'subscriber';

export class IUser {
  id: string;
  uniqueId?: string;
  email?: string;
  username?: string;
  description?: string;
  content?: string;
  fullname?: string;
  phone?: string;
  address?: string;
  birthday?: string;
  gender?: number;
  social?: string;
  avatar?: IMedia;
  role?: IUserRole;
  status?: EUserStatus;
  deleted?: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  ref?: IUser;
  metas?: IUserMeta[];
  apps?: IApp;
  appRoles?: IAppRole[];
  subscriber?: ISubscriber;
  appPermissions?: IAppPermission[];
  parties?: IParty[];
}

export class IUserMeta {
  id: string;
  key?: string;
  value?: string;
  createdAt?: string;
  updatedAt?: string;
  user?: IUser;
}
export class IUserRole {
  id?: string;
  name?: string;
  permissions?: string[];
}

export enum EUserStatus {
  PENDING,
  ACTIVE,
  HOLD,
  BAN,
  DELETE,
}
