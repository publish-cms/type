import { IUser } from '../user';

export class IUserParty {
  id?: string;
  partyId?: string;
  type?: EUserPartyType | string;
  userId?: string;
  user?: IUser;
  nonce?: string;
  extra?: any;
  count?: number;
  status?: EUserPartyStatus | string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export enum EUserPartyType {
  TELEGRAM = 'TELEGRAM',
  WALLET = 'WALLET',
  FACEBOOK = 'FACEBOOK',
  GOOGLE = 'GOOGLE',
  TWITTER = 'TWITTER',
}

export enum EUserPartyStatus {
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE',
}
