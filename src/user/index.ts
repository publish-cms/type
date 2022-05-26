import { IApp, IAppPermission, IAppRole, IAppRoleUser } from 'app';
import { IMedia } from 'media';
import { IUserParty } from 'party';
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
  birthday?: string | Date;
  gender?: number;
  social?: string;
  avatar?: IMedia;
  role?: IAppRole;
  status?: EUserStatus | string;
  deleted?: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  refId?: string;
  ref?: IUser;
  metas?: IUserMeta[];
  apps?: IApp;
  roles?: IAppRoleUser[];
  subscriber?: ISubscriber;
  permissions?: IAppPermission[];
  parties?: IUserParty[];
}

export class IUserMeta {
  id?: string;
  key?: string;
  value?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  user?: IUser;
}

export enum EUserStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  HOLD = 'HOLD',
  BAN = 'BAN',
  DELETE = 'DELETE',
}
