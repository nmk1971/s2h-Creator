import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { QuizModule } from './../quiz/quiz.module';
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
import { SideBarComponent } from './side-bar/side-bar.component';




@NgModule({
  declarations: [HomePageComponent,
    NavbarComponent,
    FooterComponent,
    ReposPageComponent,
    AboutComponent,
    SupportPageComponent,
    SideBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    QuizModule,
  ],
  exports:[HomePageComponent,
    NavbarComponent,
    FooterComponent,
    ReposPageComponent,
    AboutComponent,
    SupportPageComponent,
    SideBarComponent]
})
export class LayoutModule { }
