import { SessionResolver } from './../shared/session/session.resolver';
import { SessionDashboardComponent } from './../shared/session/session-dashboard/session-dashboard.component';
import { UpdateStudentComponent } from './../shared/student/update-student/update-student.component';
import { AddGroupComponent } from './../shared/group/add-group/add-group.component';
import { UpdateGroupComponent } from './../shared/group/update-group/update-group.component';
import { AddStudentComponent } from './../shared/student/add-student/add-student.component';


import { CommonModule } from '@angular/common';
import { SessionListComponent } from './../shared/session/session-list/session-list.component';
import { SessionFormComponent } from './../shared/session/session-form/session-form.component';
import { QuizResolver } from './../shared/quiz/quiz-resolver';
import { CreatorLandPageComponent } from './creator-land-page/creator-land-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from '../guest/about/about.component';

import { AddQuizComponent } from './../shared/quiz/add-quiz/add-quiz.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReposPageComponent } from './repos-page/repos-page.component';
import { SupportPageComponent } from './support-page/support-page.component';
import { SettingsComponent } from './settings/settings.component';
import { SharedQuizzesComponent } from '../shared/quiz/shared-quizzes/shared-quizzes.component';
import { GroupPageComponent } from './group-page/group-page.component';
import { StudentPageComponent } from './student-page/student-page.component';

export const routes: Routes = [
  {
    path: '', component: CreatorLandPageComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'quiz', component: ReposPageComponent },
      { path: 'quiz/add', component: AddQuizComponent },
      {
        path: 'quiz/update/:id',
        component: AddQuizComponent,
        resolve: {
          _quiz: QuizResolver
        }
      },
      { path: 'group', component: GroupPageComponent },
      { path: 'group/add', component: AddGroupComponent },
      {
        path: 'group/update/:id',
        component: UpdateGroupComponent,
        /*       resolve: {
               _quiz:QuizResolver
               }*/
      },
      { path: 'student', component: StudentPageComponent },
      { path: 'student/add', component: AddStudentComponent },
      {
        path: 'student/update/:id',
        component: UpdateStudentComponent,
        /*      resolve: {
              _quiz:QuizResolver
              }*/
      },
      {
        path: 'session/open/:id',
        component: SessionFormComponent,
        resolve: {
          quiz: QuizResolver
        }
      },
      {
        path: 'session/update/:id',
        component: SessionFormComponent,
        resolve: {
          _quiz: QuizResolver
        }
      },
      { path: 'session/list', component: SessionListComponent },
      {
        path: 'session/dashboard/:id',
        component: SessionDashboardComponent,
        resolve: {
          session: SessionResolver
        }
      },
      { path: 'about', component: AboutComponent },
      { path: 'support', component: SupportPageComponent },
      { path: 'shared', component: SharedQuizzesComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  providers: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorRoutingModule { }
