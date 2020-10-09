import { IStudent } from './../student/student.model';
export interface IGroup{
    _id?: string;
    label: string;
    description?: string;
    owner: string;
    students?: IStudent[];
}
