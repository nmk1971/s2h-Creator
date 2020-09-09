import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IQuestion } from '../quiz-list/question.model';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  @Input() question_type;
  @Input() quizId;
  @Input() context:string;
  @Input() question:IQuestion;
  
  @Output() onQuestionSave:EventEmitter<any>=new EventEmitter<any>();
 
  constructor() { }

  ngOnInit(): void {}
    
  questionSaved(){
     this.onQuestionSave.next('Ok');
  }

}
