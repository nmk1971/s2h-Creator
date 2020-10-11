import { SessionService } from './../session.service';
import { SessionDataSource } from './../session.datasource';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { IUser } from '../../user/user.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthenticationService } from '../../user/authentication.service';
import { merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements AfterViewInit, OnInit, OnDestroy{

  public currentCreator: IUser;
  private subscription: Subscription;
  public resultsCount: number;

  displayedColumns = ['opendate', 'title', 'isAnonymous', 'group', 'actions'];

  dataSource: SessionDataSource;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('input', { static: true }) input: ElementRef;

  constructor(
    private sessionService: SessionService,
    private authService: AuthenticationService) {
    this.subscription = this.authService.currentUser.subscribe(user => this.currentCreator = user);
  }


  ngOnInit(): void {
    this.dataSource = new SessionDataSource(this.sessionService);
    this.dataSource.loadSessions(this.currentCreator._id, 0, 10, 'opendate', 'desc', '');
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadSessionsPage();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => {
          this.loadSessionsPage();
        })
      )
      .subscribe();

  }

  loadSessionsPage(): void {
    this.dataSource.loadSessions(
      this.currentCreator._id,
      this.paginator.pageIndex,
      this.paginator.pageSize,
      this.sort.active,
      this.sort.direction,
      this.input.nativeElement.value);

  }

  start(id): void {
    console.log('Start Session:', id);
       //TODO: Implement action start over API
  }

  close(id): void {
    console.log('Close Session:', id);
    //TODO: Implement action clese over API
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
