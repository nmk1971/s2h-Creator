import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse } from 'src/app/shared/helpers/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }

  public getAllResponseByCreator(creatorId: string): Observable<IApiResponse>{
    return this.http.get(`${environment.apiUrl}/api/v1/statistics/responses`) as Observable<IApiResponse>;
  }

}
