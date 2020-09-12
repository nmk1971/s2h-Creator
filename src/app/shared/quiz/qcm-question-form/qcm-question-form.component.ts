import { MatSnackBar } from '@angular/material/snack-bar';
import { IApiResponse } from './../../helpers/api-response.model';
import { QuestionService } from './../question.service';
import { IQuestion } from './../quiz-list/question.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IQCXResponse } from './../add-quiz/qcu.model';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-qcm-question-form',
  templateUrl: './qcm-question-form.component.html',
  styleUrls: ['./qcm-question-form.component.scss']
})
export class QcmQuestionFormComponent implements OnInit,OnChanges {
  @Input() quizId;
  @Input() context;
  @Input() question: IQuestion;

  @Output() onQuestionSave: EventEmitter<any> = new EventEmitter<any>();

  public qcmResponseList: IQCXResponse[] = [];
  public QCMQuestionForm: FormGroup;


  constructor(private fb: FormBuilder,
    private questionService: QuestionService,
    private snackBar: MatSnackBar) {
    this.QCMQuestionForm = fb.group({
      questionText: ['']
    })

  }

  ngOnInit(): void {
    console.log('from qcm-question-form context : ',this.context);
    if (this.context === 'new') {
      this.qcmResponseList.push({ label: '', isValid: false });
      this.qcmResponseList.push({ label: '', isValid: false });
    } else if (this.context === 'update') {
      this.QCMQuestionForm = this.fb.group({
        questionText: [this.question.questionText]
      });
      this.qcmResponseList = [...this.question.qcxResponse];

    }
  }

  ngOnChanges(){
 //   console.log(`%c ${JSON.stringify(this.question)} `, 'background: tomato; color: white')
    if (this.context === 'update') {
      this.QCMQuestionForm = this.fb.group({
        questionText: [this.question.questionText]
      });
      this.qcmResponseList = [...this.question.qcxResponse];
    }
  }


  addResponse() {
    this.qcmResponseList.push({ label: '', isValid: false });
  }

  deleteResponse(response) {
    this.qcmResponseList = this.qcmResponseList.filter(r => r !== response);
  }

  radioChecked(index) {
    for (var i = 0; i < this.qcmResponseList.length; i++) {
      if (i !== index) {
        this.qcmResponseList[i].isValid = false;
      } else {
        this.qcmResponseList[i].isValid = true;
      }
    }
  }

// save to api
  createQuestion() {
    let quest: IQuestion = {
      quizId: this.quizId,
      questionText: this.QCMQuestionForm.value.questionText,
      question_type: 'QCM',
      qcxResponse: this.qcmResponseList
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

// update to api
  updateQuestion() {
    let quest: IQuestion = {
      _id: this.question._id,
      quizId: this.quizId,
      questionText: this.QCMQuestionForm.value.questionText,
      question_type: 'QCM',
      qcxResponse: this.qcmResponseList
    }

    this.questionService.updateQuestionInAPI(this.question._id, quest).subscribe({
      next: (data: IApiResponse) => {
        this.snackBar.open(data.message, 'x', { duration: 3000 });
        this.questionService.updateQuestion(quest);
        this.onQuestionSave.emit('Ok');
      },
      error: (error: Error) => {
        this.snackBar.open(error.message, 'x');
      },
      complete: console.log
    })
  }

  saveQuestion() {
    if (this.context === 'new') {
      this.createQuestion();
    } else if (this.context === 'update') {
      this.updateQuestion();
    }
  }
}



