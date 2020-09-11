import { CreatorLandPageComponent } from './creator/creator-land-page/creator-land-page.component';
import { SupportComponent } from './guest/support/support.component';
import { LandHomeComponent } from './guest/land-home/land-home.component';
import { SignupComponent } from './shared/user/signup/signup.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './guest/about/about.component';
import { ContactComponent } from './guest/contact/contact.component';
import { LoginComponent } from './shared/user/login/login.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    component: LandHomeComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'about', component: AboutComponent },
      { path: 'support', component: SupportComponent },
      { 
        path: 'contact', 
        component: ContactComponent,
        canActivate:[AuthGuard]
      },
      { path: '**', redirectTo: 'home' },
    ]
  },

  {
    path: 'creator',
    loadChildren: () => import('./creator/creator.module').then(m => m.CreatorModule),
    canLoad:[AuthGuard],
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
