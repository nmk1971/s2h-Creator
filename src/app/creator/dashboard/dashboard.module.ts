import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatAvgQuizComponent } from './stat-avg-quiz/stat-avg-quiz.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CorrectResponsesBySessionComponent } from './correct-responses-by-session/correct-responses-by-session.component';
import { ResultsByStudentComponent } from './results-by-student/results-by-student.component';
import { StudentEvolutionComponent } from './student-evolution/student-evolution.component';
import { ResponsesBySurveyComponent } from './responses-by-survey/responses-by-survey.component';



@NgModule({
  declarations: [
    StatAvgQuizComponent,
    CorrectResponsesBySessionComponent,
    ResultsByStudentComponent,
    StudentEvolutionComponent,
    ResponsesBySurveyComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxChartsModule
  ],
  exports: [
    StatAvgQuizComponent,
    CorrectResponsesBySessionComponent,
    ResultsByStudentComponent,
    StudentEvolutionComponent,
    ResponsesBySurveyComponent
  ]
})
export class DashboardModule { }
