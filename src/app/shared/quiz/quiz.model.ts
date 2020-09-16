import { IUser } from './../user/user.model';
import { IQuestion } from './quiz-list/question.model';

export interface IQuiz {
    _id?: string;
    title: string;
    description?:string;
    creator?:IUser;
    theme:string;
    cover: string;
    isShared:boolean;
    questions:IQuestion[] ;
  }