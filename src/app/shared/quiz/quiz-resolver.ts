import { QuizService } from './quiz.service';
import { IQuiz } from './quiz.model';
import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class QuizResolver implements Resolve<IQuiz> {
  constructor(private quizService: QuizService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.quizService.getQuizById(route.paramMap.get('id'));
  }
}