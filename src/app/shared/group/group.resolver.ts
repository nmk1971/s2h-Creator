import { GroupService } from './group.service';
import { IGroup } from './group.model';

import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class GroupResolver implements Resolve<IGroup> {
  constructor(private groupService: GroupService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.groupService.getGroupById(route.paramMap.get('id'));
  }
}