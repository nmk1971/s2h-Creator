import { LandHomeComponent } from './guest/land-home/land-home.component';
import { SignupComponent } from './shared/user/signup/signup.component';
import { LoginComponent } from './shared/user/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './guest/about/about.component';
import { ContactComponent } from './guest/contact/contact.component';

const routes: Routes = [
  {path:'',component:LandHomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'creator',loadChildren: ()=>import('./creator/creator.module').then(m => m.CreatorModule)},
  {path:'**',redirectTo:'',pathMatch:'full'},
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
