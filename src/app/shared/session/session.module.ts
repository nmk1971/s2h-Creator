
import { MaterialModule } from './../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SessionListComponent } from './session-list/session-list.component';
import { WidgetSessionListComponent } from './widget-session-list/widget-session-list.component';
import { SessionFormComponent } from './session-form/session-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SessionListComponent, 
    WidgetSessionListComponent, 
    SessionFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class SessionModule { }
