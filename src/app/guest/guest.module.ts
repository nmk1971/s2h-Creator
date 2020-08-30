import { UserModule } from './../shared/user/user.module';
import { RouterModule } from '@angular/router';
import { LandNavComponent } from './land-nav/land-nav.component';
import { LandHomeComponent } from './land-home/land-home.component';
import { LandFooterComponent } from './land-footer/land-footer.component';
import { MaterialModule } from './../shared/material/material.module';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';


@NgModule({
  declarations: [
    ContactComponent,
    AboutComponent,
    LandFooterComponent,
    LandHomeComponent,
    LandNavComponent,
    SupportComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    UserModule
  ],
  exports:[
    ContactComponent,
    AboutComponent,
    LandFooterComponent,
    LandHomeComponent,
    LandNavComponent
  ]
})
export class GuestModule { }
