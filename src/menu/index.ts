export class IMenu {
  id: string;
  type?: number;
  title?: string;
  url?: string;
  image?: string;
  parentId?: string;
  children?: string;
  childrens?: IMenu[];
  createdAt?: Date | string;
  updatedAt?: Date | string;
  parent?: IMenu;
  menu?: IMenu[];
}
