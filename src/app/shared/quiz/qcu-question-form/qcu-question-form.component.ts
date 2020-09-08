import { MatSnackBar } from '@angular/material/snack-bar';
import { IApiResponse } from './../../helpers/api-response.model';
import { QuestionService } from './../question.service';
import { IQuestion } from './../quiz-list/question.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IQCXResponse } from './../add-quiz/qcu.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qcu-question-form',
  templateUrl: './qcu-question-form.component.html',
  styleUrls: ['./qcu-question-form.component.scss']
})
export class QcuQuestionFormComponent implements OnInit {
  @Input() quizId;
  public qcuResponseList: IQCXResponse[] = [];
  public QCUQuestionForm: FormGroup
  constructor( private fb: FormBuilder,
               private questionService: QuestionService,
               private snackBar:MatSnackBar) {
    this.QCUQuestionForm = fb.group({
      questionText: ['']
    })

  }

  ngOnInit(): void {
    this.qcuResponseList.push({ label: '', isValid: false });
    this.qcuResponseList.push({ label: '', isValid: false });
  }

  display(v) {
    console.dir(v)
  }
  addResponse() {
    this.qcuResponseList.push({ label: '', isValid: false });
  }

  radioChecked(index) {
    for (var i = 0; i < this.qcuResponseList.length; i++) {
      if (i !== index) {
        this.qcuResponseList[i].isValid = false;
      } else {
        this.qcuResponseList[i].isValid = true;
      }
    }
  }

  saveQuestion() {
    let quest: IQuestion = {
      quizId: this.quizId,
      questionText: this.QCUQuestionForm.value.questionText,
      question_type: 'QCU',
      qcxResponse: this.qcuResponseList
    }

    this.questionService.postQuestion(quest).subscribe({
      next: (data: IApiResponse) => {
            this.snackBar.open(data.message,'x',{duration:3000});
            this.questionService.addQuestion(data.payload);
      },
      error:(error:Error)=>{
        this.snackBar.open(error.message,'x');
      },
      complete:console.log
    })

  }
}
