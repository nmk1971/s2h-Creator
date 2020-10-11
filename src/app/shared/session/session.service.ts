import { ISession } from './session.model';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IApiResponse } from '../helpers/api-response.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http: HttpClient) { }

  openSession(session: ISession): Observable<IApiResponse>{
    return this.http.post(`${environment.apiUrl}/api/v1/quiz-sessions/open`, session) as Observable<IApiResponse>;
  }

  findSessionsByCreator(
    creatorId: string ,
    page = 0,
    limit = 10,
    sort = 'opendate',
    direction = 'desc',
    filter = '',
     ): Observable<{totalCount: number, items: ISession[]}> {
      const requestUrl = `${environment.apiUrl}/api/v1/quiz-sessions/creator/${creatorId}`;


      return this.http.get(requestUrl, {
        params: new HttpParams()
            .set('page', page.toString())
            .set('limit', limit.toString())
            .set('sort', sort)
            .set('direction', direction)
            .set('filter', filter)
    }).pipe(
        // tslint:disable-next-line: no-string-literal
        map(res =>  res['payload'])
    );
}
}

