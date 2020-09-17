import { ActivatedRoute } from '@angular/router';
import { IQuiz } from './../../quiz/quiz.model';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.scss']
})
export class SessionFormComponent implements OnInit {
  public currentQuiz:IQuiz;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.currentQuiz=this.route.snapshot.data?._quiz?.payload as IQuiz;
  }

}

