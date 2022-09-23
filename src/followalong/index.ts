import { ILink } from '../link';
import { IMedia } from '../media';
import { IPost } from '../post';
import { IUser } from '../user';

export class IFollowAlong {
  id?: string;
  title?: string;
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeyword?: string;
  status?: EFollowAlongStatus;
  views?: number;
  authorId?: string;
  author?: IUser;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  mediaImage?: IMedia;
  link?: ILink;
  followAlongMeta?: IFollowAlongMeta[];
  posts?: IPost[];
}

export class IFollowAlongMeta {
  id: string;
  key?: string;
  value?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  followAlong?: IFollowAlong;
}

export enum EFollowAlongStatus {
  DRAF = 1,
  PENDING = 2,
  PUBLISH = 3,
  CANCEL = 4,
}
