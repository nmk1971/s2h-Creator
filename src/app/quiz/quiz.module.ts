import { MaterialModule } from './../shared/material/material.module';
import { AddQuizComponent } from './add-quiz/add-quiz.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuizListComponent } from './quiz-list/quiz-list.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AddQuizComponent,QuizListComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  exports:[AddQuizComponent,QuizListComponent]
})
export class QuizModule { }
