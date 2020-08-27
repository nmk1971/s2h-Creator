import { MaterialModule } from './../shared/material/material.module';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { GuestHomeComponent } from './guest-home/guest-home.component';


@NgModule({
  declarations: [
    ContactComponent, 
    GuestHomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    ContactComponent,
    AboutComponent
  ]
})
export class GuestModule { }
