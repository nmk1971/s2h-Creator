import { IQuestion } from './quiz-list/question.model';

export interface IQuiz {
    _id?: string;
    title: string;
    description?:string;
    theme:string;
    cover: string;
    isShared:boolean;
    questions:IQuestion[] ;
  }