import { IGroup } from './../group/group.model';
import { IUser } from './../user/user.model';
export interface ISession {
    _id?: string;
    idquiz: string;
    evaluationType: string;
    isAnonymous: boolean;
    group?: string | IGroup;
    creator?: string | IUser;
    quizSessionCode?: string;
    isOpen: boolean;
    openDate: Date;
    closeDate: Date;
}
