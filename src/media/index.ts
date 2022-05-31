import { IUser } from '../user';

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
  createdAt?: Date | string;
  updatedAt?: Date | string;
  type?: EMediaType;
}

export enum EMediaType {
  POST = 1,
  COMMENT = 2,
  AVATAR = 3,
}
