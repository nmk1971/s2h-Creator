import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { ErrorInterceptor } from './shared/helpers/error.interceptor';
import { JwtInterceptor } from './shared/helpers/jwt.intercepror';
import { GuestModule } from './guest/guest.module';
import { UserModule } from './shared/user/user.module';
import { QuizModule } from './shared/quiz/quiz.module';
import { MaterialModule } from './shared/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { registerLocaleData, formatDate } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';

registerLocaleData(localeFr,'fr-FR',localeFrExtra);

/*@Pipe({
name : 'monthAsLabel'
})

export class MonthAsLabelPipe implements PipeTransform{
  transform(value: DateModel, args?:any): any {
    return formatDate(value.dateTime, 'MMMM', 'fr-FR');
  }
}
*/
@NgModule({
  declarations: [
    AppComponent,ConfirmationDialogComponent
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_DIALOG_DATA, useValue: 'dialogData'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
