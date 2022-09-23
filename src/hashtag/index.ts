import { IMedia } from '../media';

export class IHashtag {
  id?: string;
  slug?: string;
  title?: string;
  description?: string;
  status?: EHashtagStatus;
  imageId?: string;
  iconId?: string;
  sort?: number;
  deleted?: boolean;
  seoTitle?: string;
  seoKeyword?: string;
  seoDescription?: string;
  seoImageId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  mediaIcon?: IMedia;
  mediaImage?: IMedia;
  mediaSeoImage?: IMedia;
}

export enum EHashtagStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}
