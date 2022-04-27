export class IBanner {
  id: string;
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
