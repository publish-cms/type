import { ILink } from 'link';
import { IMedia } from 'media';
import { IPost } from 'post';
import { IUser } from 'user';

export class IFollowAlong {
  id: string;
  title?: string;
  description?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeyword?: string;
  status?: number;
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
