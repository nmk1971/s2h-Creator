import { IApiResponse } from './../helpers/api-response.model';
import { IGroup } from './group.model';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  getGroupsByCreator(creatorId: string): Observable<IApiResponse>{
    return this.http.get(`${environment.apiUrl}/api/v1/groups/creator/${creatorId}`) as Observable<IApiResponse>
  }
}
