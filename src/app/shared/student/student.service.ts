import { IStudent } from './student.model';
import { Observable, of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClientModule) { }

  getStudentsByCreator(creatorId: string): Observable<IStudent[]>{
    return of([]);
  }
}


// TODO: To implement Pagination & sorting Over API
