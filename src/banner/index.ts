import { IMedia } from 'media';

export class IBanner {
  id?: string;
  key?: string;
  title?: string;
  type?: number;
  status?: number;
  position?: number;
  content?: string;
  createdAt?: Date | string;
  bannerMeta?: IBannerMeta;
}

export class IBannerMeta {
  id?: string;
  key?: string;
  value?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  banner?: IBanner;
}

export class IBannerNative extends IBannerMeta {
  destinationUrl?: string;
  titleNative?: string;
  descriptionNative?: string;
  image?: IMedia;
}

export class IBannerContent extends IBanner {
  destinationUrl?: string;
  mobileImage?: IMedia;
  desktopImage?: IMedia;
}

export enum EBannerKey {
  HOME = 'HOME',
  POST = 'POST',
}

export enum EBannerPosition {
  POST_UNDERTITLE = 'UNDERTITLE',
  POST_UNDERAUTHOR = 'UNDERAUTHOR',
  HOME_TOP = 'TOP',
  HOME_BOTTOM = 'BOTTOM',
}

export enum EBannerType {
  NATIVE = 2,
  IMAGE = 1,
}
