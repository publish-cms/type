import { IUser } from 'user';

export class IMedia {
  id: string;
  title?: string;
  alt?: string;
  ext?: string;
  hash?: string;
  width: number | string;
  height: number | string;
  size?: number;
  url?: string;
  urlLarge?: string;
  urlMedium?: string;
  urlRaw?: string;
  urlSmall?: string;
  createdBy?: IUser;
  createdAt?: Date;
  updatedAt?: Date;
  type?: number;
}
