import { IUser } from 'user';

export class IParty {
  id: string;
  partyId?: string;
  type?: EPartyType;
  userId?: string;
  user?: IUser;
  nonce?: string;
  extra?: any;
  count?: number;
  status?: EPartyStatus;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export enum EPartyType {
  TELEGRAM,
  WALLET,
  FACEBOOK,
  GOOGLE,
}

export enum EPartyStatus {
  INACTIVE,
  ACTIVE,
}
