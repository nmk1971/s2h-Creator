import { Observable } from 'rxjs';
import { QuestionService } from './../question.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IQuestion } from '../quiz-list/question.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
import { IApiResponse } from '../../helpers/api-response.model';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  @Output() onQuestionUpdateCliqued=new EventEmitter<IQuestion>()

  public questions$:Observable<IQuestion[]>;
  constructor(
    private questionService:QuestionService,
    private shnackBar: MatSnackBar,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
   this.questions$=this.questionService.currentQuestionList$.asObservable() 
  }

  deleteQuestion(id){
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
          width: '450px',
          data: "Supprimer la Question?"
        });
    
        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.questionService.deleteQuestionFromAPI(id).subscribe({
              next: (response: IApiResponse) => {
                this.shnackBar.open(response.message, 'X', { duration: 3000 });
                if(response.status==="success"){
                  this.questionService.deleteQuestion(id);
                }   
              },
              error: (error) => {
                this.shnackBar.open(error.message, 'X');
              },
              complete: console.log
            });
          };
        });

  }


  updateQuestion(question:IQuestion){
    //TODO: to implement update Question and update behaviorSubject
    this.onQuestionUpdateCliqued.next(question);


}


}
