import { ICategory } from "category";
import { IFollowAlong } from "followalong";
import { IPost } from "post";

export class ILink {
  id: string;
  slug?: string;
  title?: string;
  detail?: string;
  type?: number;
  shortLink?: string;
  targetUrl?: string;
  statusCode?: number;
  views?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  category?: ICategory;
  followAlong?: IFollowAlong;
  linkMeta?: ILinkMeta;
  post?: IPost;
}

export class ILinkMeta {
  id: string;
  key?: string;
  value?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  link?: ILink;
}
