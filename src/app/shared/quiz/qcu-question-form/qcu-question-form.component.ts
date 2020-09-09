import { MatSnackBar } from '@angular/material/snack-bar';
import { IApiResponse } from './../../helpers/api-response.model';
import { QuestionService } from './../question.service';
import { IQuestion } from './../quiz-list/question.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IQCXResponse } from './../add-quiz/qcu.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-qcu-question-form',
  templateUrl: './qcu-question-form.component.html',
  styleUrls: ['./qcu-question-form.component.scss']
})
export class QcuQuestionFormComponent implements OnInit {
  @Input() quizId;
  @Input() context;
  @Input() question:IQuestion;

  @Output() onQuestionSave: EventEmitter<any> = new EventEmitter<any>();

  public qcuResponseList: IQCXResponse[] = [];
  public QCUQuestionForm: FormGroup;
  public oneChecked: boolean = false;


  constructor(private fb: FormBuilder,
    private questionService: QuestionService,
    private snackBar: MatSnackBar) {
    this.QCUQuestionForm = fb.group({
      questionText: ['']
    })

  }

  ngOnInit(): void {
    if (this.context === 'new') {
      this.qcuResponseList.push({ label: '', isValid: false });
      this.qcuResponseList.push({ label: '', isValid: false });
    } else if (this.context === 'update') {
      this.QCUQuestionForm = this.fb.group({
        questionText: [this.question.questionText]
      });

      this.qcuResponseList=[...this.question.qcxResponse];

    }
  }


  addResponse() {
    this.qcuResponseList.push({ label: '', isValid: false });
  }

  deleteResponse(response) {
    this.qcuResponseList = this.qcuResponseList.filter(r => r !== response);
  }

  radioChecked(index) {
    for (var i = 0; i < this.qcuResponseList.length; i++) {
      if (i !== index) {
        this.qcuResponseList[i].isValid = false;
      } else {
        this.qcuResponseList[i].isValid = true;
      }
    }
    this.oneChecked = true;
  }


  createQuestion() {
    let quest: IQuestion = {
      quizId: this.quizId,
      questionText: this.QCUQuestionForm.value.questionText,
      question_type: 'QCU',
      qcxResponse: this.qcuResponseList
    }

    this.questionService.postQuestion(quest).subscribe({
      next: (data: IApiResponse) => {
        this.snackBar.open(data.message, 'x', { duration: 3000 });
        this.questionService.addQuestion(data.payload);
        this.onQuestionSave.emit('Ok');
      },
      error: (error: Error) => {
        this.snackBar.open(error.message, 'x');
      },
      complete: console.log
    })

  }


  updateQuestion() {
   console.log(this.QCUQuestionForm.value,'\n',this.qcuResponseList)
  }

  saveQuestion() {
    if (this.context === 'new') {
      this.createQuestion();
    } else if (this.context === 'update') {
      this.updateQuestion();
    }
  }
}


