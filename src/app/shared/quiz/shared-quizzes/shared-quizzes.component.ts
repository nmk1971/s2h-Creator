import { Component, OnInit, OnChanges, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { IQuiz } from '../quiz.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { QuizService } from '../quiz.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { IApiResponse } from '../../helpers/api-response.model';

@Component({
  selector: 'app-shared-quizzes',
  templateUrl: './shared-quizzes.component.html',
  styleUrls: ['./shared-quizzes.component.scss']
})
export class SharedQuizzesComponent implements OnInit, OnChanges, OnDestroy {
  public isLoadingResults: boolean = false;
  public displayedColumns = ["dateCreated", "theme", "title",  "actions"];
  private subscription: Subscription;


  datasource: MatTableDataSource<IQuiz>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  resultsLength = 0;
  public quiz: IQuiz[];
  constructor(
    private quizService: QuizService,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getSharedQuizzes();
  }

  ngOnChanges() {
    this.datasource = new MatTableDataSource(this.quiz);
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  
  edit(id) {
    console.log(id)
  }

  applyFilter(filterValue: string) {
    this.datasource.filter = filterValue.trim().toLowerCase();
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  getSharedQuizzes() {
    this.subscription = this.quizService.getSharedQuizzes().subscribe({
      next: (data: IApiResponse) => {
        this.isLoadingResults = true;
        this.quiz = data.payload;
        this.datasource = new MatTableDataSource<IQuiz>(this.quiz);
        this.resultsLength = this.quiz?.length;
        this.datasource.paginator = this.paginator;
        this.datasource.sort = this.sort;
        this.snackBar.open(data.message, 'X', { duration: 3000 });
      },
      error: (error: Error) => {
        this.snackBar.open(error.message, 'X');
      },
      complete: () => {
        this.isLoadingResults = false;
      }
    })
  }
}
