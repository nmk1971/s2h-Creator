import { IStudent } from './student.model';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { IApiResponse } from '../helpers/api-response.model';
import { IQuestion } from '../quiz/quiz-list/question.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentList: IStudent[] = [];
  public currentStudentList$: BehaviorSubject<IStudent[]> = new BehaviorSubject<IStudent[]>(this.studentList);

  constructor(private http: HttpClient) { }

  public postStudent(student: IStudent): Observable<IApiResponse>{
    return this.http.post(`${environment.apiUrl}/api/v1/students/add`, student) as Observable<IApiResponse>;
  }

  public deleteSudentFromAPI(id: string): Observable<IApiResponse>{
    return this.http.delete(`${environment.apiUrl}/api/v1/students/delete/${id}`) as Observable<IApiResponse>;
  }

  public updateStudentInAPI(id: string, student: IStudent): Observable<IApiResponse>{
    return this.http.patch(`${environment.apiUrl}/api/v1/students/update/${id}`, student) as Observable<IApiResponse>;
  }

  public getStudentsByGroup(groupId: string): Observable<IApiResponse>{
    return this.http.get(`${environment.apiUrl}/api/v1/questions/group/${groupId}`) as Observable<IApiResponse>;
  }

  public loadStudents(list): void{
        this.studentList = [...list];
        this.currentStudentList$.next(this.studentList);
  }

  public addStudent(student: IStudent): void{
       this.studentList.push(student);
       this.currentStudentList$.next(this.studentList);
  }

  public deleteStudent(id: string): void{
    this.studentList = this.studentList.filter(s => s._id !== id);
    this.currentStudentList$.next(this.studentList);
  }

  public updateStudent(student: IStudent): void{
    const objIndex = this.studentList.findIndex(obj => obj._id === student._id);
    this.studentList[objIndex] = student;
    this.currentStudentList$.next(this.studentList);
  }

  /*
  * to bind with paginated datasource
  */
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

