import { StudentService } from './../student.service';
import { StudentDataSource } from './../student.datasource';
import { IUser } from './../../user/user.model';
import { AuthenticationService } from './../../user/authentication.service';
import { environment } from './../../../../environments/environment';
import { IStudent } from './../student.model';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { fromEvent, merge, Observable, of, Subscription } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, map, startWith, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements AfterViewInit, OnInit, OnDestroy {
  public currentCreator: IUser;
  private subscription: Subscription;
  public resultsCount: number;

  displayedColumns = ['firstname', 'lastname', 'gender', 'group', 'loginname', 'password', 'actions'];

  dataSource: StudentDataSource;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild('input', { static: true }) input: ElementRef;

  constructor(private studentService: StudentService, private authService: AuthenticationService) {
    this.subscription = this.authService.currentUser.subscribe(user => this.currentCreator = user);
  }

  ngOnInit(): void {
    this.dataSource = new StudentDataSource(this.studentService);
    this.dataSource.loadStudents(this.currentCreator._id, 0, 10, 'firstname', 'asc', '');

  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadStudentsPage();
        })
      )
      .subscribe();

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => {
         // this.paginator.page.subscribe(event => console.log(JSON.stringify(event)));
          this.loadStudentsPage();
        })
      )
      .subscribe();

  }

  loadStudentsPage(): void {
    this.dataSource.loadStudents(
      this.currentCreator._id,
      this.paginator.pageIndex,
      this.paginator.pageSize,
      this.sort.active,
      this.sort.direction,
      this.input.nativeElement.value);

  }

  delete(id): void {
    console.log(id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}


