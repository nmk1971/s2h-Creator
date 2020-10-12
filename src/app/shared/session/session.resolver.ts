import { SessionService } from './session.service';
import { ISessionDashboard } from './session.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class SessionResolver implements Resolve<ISessionDashboard> {
  constructor(private sessionService: SessionService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.sessionService.findSessionById(route.paramMap.get('id'));
  }
}