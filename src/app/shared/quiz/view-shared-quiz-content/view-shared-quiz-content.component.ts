import { IQuestion } from './../quiz-list/question.model';
import { Subscription } from 'rxjs';
import { IApiResponse } from './../../helpers/api-response.model';
import { QuestionService } from './../question.service';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-shared-quiz-content',
  templateUrl: './view-shared-quiz-content.component.html',
  styleUrls: ['./view-shared-quiz-content.component.scss']
})
export class ViewSharedQuizContentComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  public questions:IQuestion[];

  constructor(private questionService: QuestionService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ViewSharedQuizContentComponent>) {
  }

  ngOnInit(): void {
    this.subscription = this.questionService.getQuestionsByQuiz(this.data.quizId).subscribe(
      {
        next: (response: IApiResponse) => {
          this.questions=response.payload;
         },
        error: (error:Error) => { console.log(error.message)},
        complete: () => { }
      }
    );
  }

  confirm() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close(false);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
