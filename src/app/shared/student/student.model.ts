import { IUser } from './../user/user.model';
export interface IStudent{
   id?: string;
   firstname: string;
   lastname: string;
   gender: string;
   loginname: string;
   password: string;
   creator?: string;
  }
