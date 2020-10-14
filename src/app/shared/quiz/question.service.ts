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
  private questionList: IQuestion[] = [];
  public currentQuestionList$: BehaviorSubject<IQuestion[]> = new BehaviorSubject<IQuestion[]>(this.questionList);

  constructor(private http: HttpClient) { }

  public postQuestion(question: IQuestion): Observable<IApiResponse>{
    return this.http.post(`${environment.apiUrl}/api/v1/questions/add`, question) as Observable<IApiResponse>;
  }

  public deleteQuestionFromAPI(id: string): Observable<IApiResponse>{
    return this.http.delete(`${environment.apiUrl}/api/v1/questions/delete/${id}`) as Observable<IApiResponse>;
  }

  public updateQuestionInAPI(id: string, question: IQuestion): Observable<IApiResponse>{
    return this.http.put(`${environment.apiUrl}/api/v1/questions/update/${id}`, question) as Observable<IApiResponse>;
  }

  public getQuestionsByQuiz(quizId: string): Observable<IApiResponse>{
    return this.http.get(`${environment.apiUrl}/api/v1/questions/shared/${quizId}`) as Observable<IApiResponse>;
  }

  public loadQuestions(list): void{
        this.questionList = [...list];
        this.currentQuestionList$.next(this.questionList);
  }

  public addQuestion(question: IQuestion): void{
       this.questionList.push(question);
       this.currentQuestionList$.next(this.questionList);
  }

  public deleteQuestion(id: string): void{
    this.questionList = this.questionList.filter(q => q._id !== id);
    this.currentQuestionList$.next(this.questionList);
  }
  public updateQuestion(question: IQuestion): void{
    const objIndex = this.questionList.findIndex(obj => obj._id === question._id);
    console.log(objIndex, '  ', question);
    this.questionList[objIndex] = question;
    this.currentQuestionList$.next(this.questionList);
  }



}
