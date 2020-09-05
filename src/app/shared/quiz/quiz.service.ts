import { IQuiz } from './quiz.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IApiResponse } from '../helpers/api-response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private httpClient:HttpClient) { }

  postQuiz(quiz:IQuiz):Observable<IApiResponse>{
      return this.httpClient.post(`${environment.apiUrl}/api/v1/quizzes/add`,quiz) as Observable<IApiResponse>;
  }

  deleteQuiz(id){
    return this.httpClient.delete(`${environment.apiUrl}/api/v1/quizzes/delete/${id}`) as Observable<IApiResponse>;;
  }



  updateQuiz(id,quiz):Observable<IApiResponse>{
     let _quiz={...quiz};
    return this.httpClient.put(`${environment.apiUrl}/api/v1/quizzes/update/${id}`,_quiz) as Observable<IApiResponse>;
  }

  getAllQuizzes(){
    return this.httpClient.get(`${environment.apiUrl}/api/v1/quizzes`) as Observable<IApiResponse>;
  }

  getQuizById(id){
    return this.httpClient.get(`${environment.apiUrl}/api/v1/quizzes/${id}`) as Observable<IApiResponse>;
  }

  getSharedQuizzes(){
    return this.httpClient.get(`${environment.apiUrl}/api/v1/quizzes/shared}`) as Observable<IApiResponse>;
  }

  getQuizzesByCreator(userId){
    return this.httpClient.get(`${environment.apiUrl}/api/v1/quizzes/creator/${userId}`) as Observable<IApiResponse>;
  }

}
