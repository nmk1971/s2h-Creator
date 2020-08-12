import { SupportPageComponent } from './layout/support-page/support-page.component';
import { AboutComponent } from './layout/about/about.component';
import { ReposPageComponent } from './layout/repos-page/repos-page.component';
import { HomePageComponent } from './layout/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'home', redirectTo:''},
  {path:'quiz',component:ReposPageComponent},
  {path:'about',component:AboutComponent},
  {path:'support',component:SupportPageComponent},
  {path:'**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
