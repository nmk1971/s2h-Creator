import { LandPageComponent } from './land-page/land-page.component';
import { GuestModule } from './guest/guest.module';
import { CreatorModule } from './creator/creator.module';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './guest/about/about.component';
import { ContactComponent } from './guest/contact/contact.component';

const routes: Routes = [
  {path:'',component:LandPageComponent},
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
