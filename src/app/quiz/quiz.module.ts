import { MatTableModule } from '@angular/material/table';
//import { MatSort, MatSortModule } from '@angular/material/sort';
//import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MaterialModule } from './../shared/material/material.module';
import { AddQuizComponent } from './add-quiz/add-quiz.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { QuizListComponent } from './quiz-list/quiz-list.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



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
    MatSortModule
   ],
  exports:[AddQuizComponent,QuizListComponent]
})
export class QuizModule { }
