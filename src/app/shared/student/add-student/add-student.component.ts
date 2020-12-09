import { IUser } from './../../user/user.model';
import { first } from 'rxjs/operators';
import { IStudent } from './../student.model';
import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../student.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IApiResponse } from '../../helpers/api-response.model';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit, OnChanges {
  @Input() groupId;
  @Input() context;
  @Input() student: IStudent;
  @Input() creator: string | IUser;

  public genders = ['Homme', 'Femme'];
  public createStudentForm: FormGroup;

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onStudentSave: EventEmitter<any> = new EventEmitter<any>();



  constructor(private fb: FormBuilder,
              private studentService: StudentService,
              private snackBar: MatSnackBar) {
    this.createStudentForm = fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      gender: ['Homme', Validators.required]
    });

  }

  ngOnInit(): void {
    if (this.context === 'new') {
        this.createStudentForm.reset();
    } else if (this.context === 'update') {
      this.createStudentForm = this.fb.group({
        firstname: [this.student.firstname, Validators.required],
        lastname: [this.student.lastname, Validators.required],
        gender: [this.student.gender, Validators.required]
      });
    }
  }

  ngOnChanges(): void{
    if (this.context === 'update') {
      this.createStudentForm = this.fb.group({
        firstname: [this.student.firstname, Validators.required],
        lastname: [this.student.lastname, Validators.required],
        gender: [this.student.gender, Validators.required]
      });
    }
  }


 // save to api
  postStudent(): void {
    const theStudent = {...this.createStudentForm.value};
    theStudent.group = this.groupId;
    theStudent.creator = typeof(this.creator) === 'object' ? (this.creator as IUser)._id : this.creator;

    this.studentService.postStudent(theStudent).subscribe({
      next: (data: IApiResponse) => {
        this.snackBar.open(data.message, 'x', { duration: 4000 });
        this.studentService.addStudent(data.payload);
        this.onStudentSave.emit('Ok');
        this.createStudentForm.reset();
      },
      error: (error: Error) => {
        this.snackBar.open(error.message, 'x');
      },
      complete: console.log
    });

  }

// update to api
  updateStudent(): void {
    const theStudent: IStudent = this.student;
    theStudent.firstname = this.createStudentForm.value.firstname;
    theStudent.lastname = this.createStudentForm.value.lastname;
    theStudent.gender = this.createStudentForm.value.gender;

    this.studentService.updateStudentInAPI(this.student._id, theStudent).subscribe({
      next: (data: IApiResponse) => {
        this.snackBar.open(data.message, 'x', { duration: 4000 });
        this.studentService.updateStudent(theStudent);
        this.onStudentSave.emit('Ok');
        this.context = 'new';
        this.createStudentForm.reset();
      },
      error: (error: Error) => {
        this.snackBar.open(error.message, 'x');
      },
      complete: console.log
    });
  }

  saveStudent(): void {
    if (this.context === 'new') {
      this.postStudent();
    } else if (this.context === 'update') {
      this.updateStudent();
    }
  }
}
