import { MaterialModule } from './../shared/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SupportPageComponent } from './support-page/support-page.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ReposPageComponent } from './repos-page/repos-page.component';




@NgModule({
  declarations: [HomePageComponent,
    NavbarComponent,
    FooterComponent,
    ReposPageComponent,
    AboutComponent,
    SupportPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  exports:[HomePageComponent,
    NavbarComponent,
    FooterComponent,
    ReposPageComponent,
    AboutComponent,
    SupportPageComponent]
})
export class LayoutModule { }
