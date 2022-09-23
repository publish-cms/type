export class ISiteInfo {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  favicon?: string;
  logo?: string;
  isSigninCapcha?: boolean;
  canComment?: boolean;
  follow?: boolean;
  siteHeader?: string;
  siteFooter?: string;
  customCSS?: string;
  googleTag?: string;
  facebookPixel?: string;
  baseURL?: string;
  apiURL?: string;
  manageURL?: string;
  customPhrase?: any;
}

export class IHeadContent {
  title?: string;
  desc?: string;
  keyword?: string;
  slug?: string;
  image?: string;
}

export class ITopSearch {
  count: number;
  value: string;
}
