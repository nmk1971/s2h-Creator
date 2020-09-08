import { environment } from './../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { IQuestion } from './quiz-list/question.model';
import { IApiResponse } from '../helpers/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private questionList:IQuestion[]=[];
  public currentQuestionList$:BehaviorSubject<IQuestion[]>=new BehaviorSubject<IQuestion[]>(this.questionList);

  constructor(private http:HttpClient) { }

  public postQuestion(question:IQuestion):Observable<IApiResponse>{
    return this.http.post(`${environment.apiUrl}/api/v1/questions/add`,question) as Observable<IApiResponse>
  }

  public loadQuestions(list):void{
        this.questionList=[...list];
        this.currentQuestionList$.next(this.questionList)
  }

  public addQuestion(question:IQuestion):void{
       this.questionList.push(question);
       this.currentQuestionList$.next(this.questionList);
  }

  public deleteQuestion(question:IQuestion):void{
    this.questionList=this.questionList.filter(q=>q._id !== question._id)
    this.currentQuestionList$.next(this.questionList);
  }
  public updateQuestion(question:IQuestion):void{
    let objIndex = this.questionList.findIndex(obj => obj._id === question._id);
    this.questionList[objIndex]=question;
    this.currentQuestionList$.next(this.questionList);
  }


  
}
