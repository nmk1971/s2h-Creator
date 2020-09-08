import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IApiResponse } from './../../helpers/api-response.model';
import { Subscription } from 'rxjs';
import { QuizService } from './../quiz.service';
import { Component, OnInit, ViewChild, OnChanges, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { getQuiz } from './quiz-source';
import { MatTableDataSource } from '@angular/material/table';
import { IQuiz } from '../quiz.model';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.scss']
})
export class QuizListComponent implements OnInit, OnChanges, OnDestroy {
  public isLoadingResults: boolean = false;
  public displayedColumns = ["dateCreated", "theme", "title", "cover", "shared", "actions"];
  private subscription: Subscription;


  datasource: MatTableDataSource<IQuiz>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  resultsLength = 0;
  public quiz: IQuiz[];
  constructor(
    private quizService: QuizService,
    private shnackBar: MatSnackBar,
    public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.getAllQuizzes();
  }


  ngOnChanges() {
    this.datasource = new MatTableDataSource(this.quiz);
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

  delete(id) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      data: "Remove this Quiz?"
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.quizService.deleteQuiz(id).subscribe({
          next: (response: IApiResponse) => {
            this.shnackBar.open(response.message, 'X', { duration: 3000 });
            this.getAllQuizzes();
          },
          error: (error) => {
            this.shnackBar.open(error.message, 'X');
          },
          complete: console.log
        });
      };
    });



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


  getAllQuizzes() {
    this.subscription = this.quizService.getAllQuizzes().subscribe({
      next: (data: IApiResponse) => {
        this.isLoadingResults = true;
        this.quiz = data.payload;
        this.datasource = new MatTableDataSource<IQuiz>(this.quiz);
        this.resultsLength = this.quiz?.length;
        this.datasource.paginator = this.paginator;
        this.datasource.sort = this.sort;
        this.shnackBar.open(data.message, 'X', { duration: 3000 });
      },
      error: (error: Error) => {
        this.shnackBar.open(error.message, 'X');
      },
      complete: () => {
        this.isLoadingResults = false;
      }
    })
  }
}
