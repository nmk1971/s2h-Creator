import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatAvgQuizComponent } from './stat-avg-quiz/stat-avg-quiz.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CorrectResponsesBySessionComponent } from './correct-responses-by-session/correct-responses-by-session.component';



@NgModule({
  declarations: [StatAvgQuizComponent, CorrectResponsesBySessionComponent],
  imports: [
    CommonModule,
    MaterialModule,
    NgxChartsModule
  ],
  exports: [StatAvgQuizComponent]
})
export class DashboardModule { }
