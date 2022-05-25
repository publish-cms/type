import { IUser } from 'user';

export class IParty {
  id: string;
  partyId?: string;
  type?: EPartyType | string;
  userId?: string;
  user?: IUser;
  nonce?: string;
  extra?: any;
  count?: number;
  status?: EPartyStatus | string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export enum EPartyType {
  TELEGRAM = 'TELEGRAM',
  WALLET = 'WALLET',
  FACEBOOK = 'FACEBOOK',
  GOOGLE = 'GOOGLE',
}

export enum EPartyStatus {
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE',
}
