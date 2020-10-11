import { IStudent } from './student.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {

  }

  findStudentsByCreator(
      creatorId: string ,
      page = 0,
      limit = 10,
      sort = 'firstname',
      direction = 'asc',
      filter = '',
       ): Observable<{totalCount: number, items: IStudent[]}> {
        const requestUrl = `${environment.apiUrl}/api/v1/students/creator/${creatorId}`;


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

