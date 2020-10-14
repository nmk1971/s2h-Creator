import { IUser } from './../user/user.model';
import { IGroup } from './../group/group.model';
export interface IStudent{
   _id?: string;
   firstname: string;
   lastname: string;
   gender: string;
   group: string | IGroup;
   loginname: string;
   password: string;
   creator?: string | IUser;
  }
