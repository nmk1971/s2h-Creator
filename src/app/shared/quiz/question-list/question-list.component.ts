import { Observable } from 'rxjs';
import { QuestionService } from './../question.service';
import { Component, OnInit } from '@angular/core';
import { IQuestion } from '../quiz-list/question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  public questions$:Observable<IQuestion[]>;
  constructor(private questionService:QuestionService) { }

  ngOnInit(): void {
   this.questions$=this.questionService.currentQuestionList$.asObservable() 
  }

  deleteQuestion(){
        //TODO: to implement delete Question and update behaviorSubject
  }
  updateQuestion(){
    //TODO: to implement update Question and update behaviorSubject
}


}
