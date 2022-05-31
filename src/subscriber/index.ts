import { IUser } from '../user';

export class ISubscriber {
  id: string;
  domainId?: string;
  meta?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  userId;
  user?: IUser;
}
