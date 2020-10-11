import { ISession } from './session.model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IApiResponse } from '../helpers/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  openSession(session: ISession): Observable<IApiResponse>{
    return this.http.post(`${environment.apiUrl}/api/v1/quiz-sessions/open`, session) as Observable<IApiResponse>;
  }
}
