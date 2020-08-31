import { IApiResponse } from './../helpers/api-response.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient:HttpClient) { }

  postUser(user:IUser):Observable<IApiResponse>{
      return this.httpClient.post(`${environment.apiUrl}/api/v1/users/register`,user) as Observable<IApiResponse>;
  }

  deleteUser(id){
    return this.httpClient.delete(`${environment.apiUrl}/api/v1/users/delete/${id}`) as Observable<IApiResponse>;;
  }

  updateUserRole(id,role):Observable<IApiResponse>{
   return this.httpClient.put(`${environment.apiUrl}/api/v1/users/update/role/${id}`,{"new_role":role}) as Observable<IApiResponse>;
  }

  updateUser(id,user):Observable<IApiResponse>{
     let _user={...user};
    return this.httpClient.put(`${environment.apiUrl}/api/v1/users/update/${id}`,_user) as Observable<IApiResponse>;
  }

  getAllUsers(){
    return this.httpClient.get(`${environment.apiUrl}/api/v1/users`) as Observable<IApiResponse>;
  }

  getUserById(id){
    return this.httpClient.get(`${environment.apiUrl}/api/v1/users/user/${id}`) as Observable<IApiResponse>;
  }

}
