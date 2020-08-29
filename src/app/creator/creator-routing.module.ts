import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from '../guest/about/about.component'

import { AddQuizComponent } from './../shared/quiz/add-quiz/add-quiz.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReposPageComponent } from './repos-page/repos-page.component';
import { SupportPageComponent } from './support-page/support-page.component';

const routes: Routes = [
  {path:'', component:HomePageComponent},
  {path:'home', redirectTo:''},
  {path:'quiz',component:ReposPageComponent},
  {path:'quiz/add',component:AddQuizComponent},
  {path:'quiz/update/:id',component:AddQuizComponent},
  {path:'about',component:AboutComponent},
  {path:'support',component:SupportPageComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorRoutingModule { }
