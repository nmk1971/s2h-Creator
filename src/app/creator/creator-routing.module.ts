import { CreatorLandPageComponent } from './creator-land-page/creator-land-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from '../guest/about/about.component'

import { AddQuizComponent } from './../shared/quiz/add-quiz/add-quiz.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReposPageComponent } from './repos-page/repos-page.component';
import { SupportPageComponent } from './support-page/support-page.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  {
    path: '', component: CreatorLandPageComponent,
    children: [
      { path: 'home', component:HomePageComponent },
      { path: 'quiz', component: ReposPageComponent },
      { path: 'quiz/add', component: AddQuizComponent },
      { path: 'quiz/update/:id', component: AddQuizComponent },
      { path: 'about', component: AboutComponent },
      { path: 'support', component: SupportPageComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '**', redirectTo: 'home', pathMatch:"full"}
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  providers:[],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorRoutingModule { }
