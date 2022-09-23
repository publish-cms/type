import { ILink } from '../link';
import { IMedia } from '../media';
import { IPost } from '../post';

export class ICategory {
  id?: string;
  title?: string;
  description?: string;
  status?: ECategoryStatus;
  type?: ECategoryType;
  sort?: number;
  deleted?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  seoKeyword?: string;
  createdAt?: string | Date;
  updatedAt?: string | Date;
  link?: ILink;
  mediaIcon?: IMedia;
  mediaSeoImage?: IMedia;
  mediaImage?: IMedia;
  posts?: IPost[];
}

export enum ECategoryStatus {
  ACTIVE = 1,
  INACTIVE = 2,
}

export enum ECategoryType {
  CATEGORY = 1,
}
