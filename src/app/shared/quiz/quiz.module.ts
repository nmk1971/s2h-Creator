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



@NgModule({
  declarations: [AddQuizComponent,QuizListComponent],
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
  exports:[AddQuizComponent,QuizListComponent]
})
export class QuizModule { }
