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


  postGroup(group: IGroup): Observable<IApiResponse> {
    return this.http.post(`${environment.apiUrl}/api/v1/groups/add`, group) as Observable<IApiResponse>;
  }


  getGroupsByCreator(creatorId: string): Observable<IApiResponse>{
    return this.http.get(`${environment.apiUrl}/api/v1/groups/creator/${creatorId}`) as Observable<IApiResponse>;
  }

  getGroupById(id) : Observable<IApiResponse>{
    return this.http.get(`${environment.apiUrl}/api/v1/groups/${id}`) as Observable<IApiResponse>;
  }

  updateGroup(id, group: IGroup): Observable<IApiResponse> {
    return this.http.patch(`${environment.apiUrl}/api/v1/groups/update/${id}`, group) as Observable<IApiResponse>;
  }
}
