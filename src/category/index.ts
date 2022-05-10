import { ILink } from 'link';
import { IMedia } from 'media';
import { IPost } from 'post';

export class ICategory {
  id: string;
  title?: string;
  description?: string;
  status?: number;
  type?: number;
  sort?: number;
  deleted?: boolean;
  seoTitle?: string;
  seoDescription?: string;
  seoKeyword?: string;
  createdAt?: string;
  updatedAt?: string;
  link?: ILink;
  mediaIcon?: IMedia;
  mediaSeoImage?: IMedia;
  mediaImage?: IMedia;
  posts?: IPost[];
}
