import { QuizModule } from './../quiz/quiz.module';
import { MaterialModule } from './../material/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionFormComponent } from './session-form/session-form.component';
import { WidgetSessionListComponent } from './widget-session-list/widget-session-list.component';



@NgModule({
  declarations: [
    SessionListComponent,
    SessionFormComponent,
    WidgetSessionListComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    QuizModule
  ],
  exports:[]
})
export class SessionModule { }
