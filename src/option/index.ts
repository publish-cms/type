import { IMedia } from '../media';
import { IPost } from '../post';

export class IOption {
  id: string;
  key?: string;
  value?: string;
}

export class ICallToAction {
  status?: any;
  text?: string;
  link?: string;
}

export enum EOptionKey {
  CUSTOM_GRID = 'CUSTOM_GRID',
}

export class ICustomGrid {
  order?: number;
  posts?: IPost[];
  enable?: boolean;
  title?: string;
  link?: string;
  typeShow: ECustomGridType.DEFAULT;
  mediaIcon?: IMedia;
}

export enum ECustomGridType {
  DEFAULT = 'DEFAULT',
}
