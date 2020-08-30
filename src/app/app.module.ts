import { GuestModule } from './guest/guest.module';
import { UserModule } from './shared/user/user.module';
import { QuizModule } from './shared/quiz/quiz.module';
import { MaterialModule } from './shared/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    QuizModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    UserModule,
    GuestModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
