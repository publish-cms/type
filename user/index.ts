import { IMedia } from "media";

export class IUser {
  id: string;
  uniqueId?: string;
  email?: string;
  username?: string;
  description?: string;
  content?: string;
  fullname?: string;
  phone?: string;
  address?: string;
  birthday?: string;
  gender?: number;
  social?: string;
  avatar?: IMedia | undefined;
  role?: IUserRole;
}

export class IUserRole {
  id: string;
  name: string;
  permissions?: string[];
}
