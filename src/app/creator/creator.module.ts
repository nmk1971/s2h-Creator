import { QuizModule } from './../shared/quiz/quiz.module';
import { MaterialModule } from './../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReposPageComponent } from './repos-page/repos-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SupportPageComponent } from './support-page/support-page.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatorRoutingModule } from './creator-routing.module';
import { SettingsComponent } from './settings/settings.component';
import { CreatorLandPageComponent } from './creator-land-page/creator-land-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    ReposPageComponent,
    SideBarComponent,
    SupportPageComponent,
    SettingsComponent,
    CreatorLandPageComponent
  ],
  imports: [
    CommonModule,
    CreatorRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    QuizModule
  ],
  exports:[
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    ReposPageComponent,
    SupportPageComponent,
    SideBarComponent
  ],
})
export class CreatorModule { }
