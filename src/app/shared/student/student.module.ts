import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { StudentsGadgetComponent } from './students-gadget/students-gadget.component';
import { StudentListFilterPipe } from './student-list-filter.pipe';



@NgModule({
  declarations: [AddStudentComponent, StudentListComponent, StudentsGadgetComponent, StudentListFilterPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports : [AddStudentComponent, StudentListComponent, StudentsGadgetComponent]
})
export class StudentModule { }
