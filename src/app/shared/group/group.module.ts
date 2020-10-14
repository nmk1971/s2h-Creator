import { StudentModule } from './../student/student.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupListComponent } from './group-list/group-list.component';
import { AddGroupComponent } from './add-group/add-group.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [GroupListComponent, AddGroupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    RouterModule,
    StudentModule
  ],
  exports:  [GroupListComponent, AddGroupComponent]
})
export class GroupModule { }
