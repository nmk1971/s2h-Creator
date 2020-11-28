import { DashboardModule } from './dashboard/dashboard.module';
import { StudentModule } from './../shared/student/student.module';
import { GroupModule } from './../shared/group/group.module';
import { SessionModule } from './../shared/session/session.module';
import { UserModule } from './../shared/user/user.module';
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
import { GroupPageComponent } from './group-page/group-page.component';
import { StudentPageComponent } from './student-page/student-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    ReposPageComponent,
    SideBarComponent,
    SupportPageComponent,
    SettingsComponent,
    CreatorLandPageComponent,
    GroupPageComponent,
    StudentPageComponent
  ],
  imports: [
    CommonModule,
    CreatorRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    QuizModule,
    UserModule,
    SessionModule,
    GroupModule,
    StudentModule,
    DashboardModule
  ],
  exports: [
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    ReposPageComponent,
    SupportPageComponent,
    SideBarComponent
  ]
})
export class CreatorModule { }
