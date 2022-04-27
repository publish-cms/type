import { ICategory } from "category";
import { ILink } from "link";
import { IMedia } from "media";
import { IUser } from "user";

export class IPost {
  id: string;
  title?: string;
  description?: string;
  content?: string;
  views?: number;
  mediaImage?: IMedia;
  image?: IMedia;
  seoTitle?: string;
  seoDescription?: string;
  seoKeyword?: string;
  seoImage?: IMedia;
  sort?: number;
  type?: number;
  status?: number;
  hot?: boolean;
  deleted?: boolean;
  categories: ICategory[];
  createdAt?: string | Date;
  updatedAt?: string | Date;
  publishDate?: string | Date;
  authorId?: string;
  author: IUser;
  postMeta?: IPostMeta[];
  category: ICategory;
  link?: ILink;
  related?: IPost[];
  canComment?: boolean;
  slug?: string;
  postRelated?: IPost[];
  mediaSeoImage?: IMedia;
}

export class IPostMeta {
  id: string;
  key?: string;
  value?: string;
  createdAt?: string;
  updatedAt?: string;
  post?: IPost;
}

export class IPostRelated {
  id: string;
  post: IPost;
  postRelated: IPost;
}

export class IPostRelationCategory {
  id: string;
  sort?: number;
  category: ICategory;
  post: IPost;
}
