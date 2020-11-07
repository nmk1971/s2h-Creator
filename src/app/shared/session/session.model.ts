import { IQuiz } from './../quiz/quiz.model';
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
    createDate: Date;
    startDate: Date;
    closeDate: Date;
}


export interface ISessionDashboard{
    _id?: string;
    idquiz: IQuiz;
    evaluationType: string;
    isAnonymous: boolean;
    returnCorrectResponse: boolean;
    group?: string | IGroup;
    creator?: string | IUser;
    quizsessioncode?: string;
    isOpen: boolean;
    createDate: Date;
    startDate: Date;
    closeDate: Date;
    studentCount?: number;
}
