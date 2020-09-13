import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from '../material/material.module';
import { AddQuizComponent } from './add-quiz/add-quiz.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuizListComponent } from './quiz-list/quiz-list.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { QcmQuestionFormComponent } from './qcm-question-form/qcm-question-form.component';
import { QcuQuestionFormComponent } from './qcu-question-form/qcu-question-form.component';
import { InputQuestionFormComponent } from './input-question-form/input-question-form.component';
import { OrderingQuestionFormComponent } from './ordering-question-form/ordering-question-form.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { ChoixTypeQuestionComponent } from './choix-type-question/choix-type-question.component';
import { QuestionListPipe } from './question-list.pipe';
import { SharedQuizzesComponent } from './shared-quizzes/shared-quizzes.component';



@NgModule({
  declarations: [AddQuizComponent,
    QuizListComponent,
    QcmQuestionFormComponent,
    QcuQuestionFormComponent,
    InputQuestionFormComponent,
    OrderingQuestionFormComponent,
    QuestionFormComponent,
    QuestionListComponent,
    ChoixTypeQuestionComponent,
    QuestionListPipe,
    SharedQuizzesComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MaterialFileInputModule
  ],
  exports: [AddQuizComponent, QuizListComponent]
})
export class QuizModule { }
