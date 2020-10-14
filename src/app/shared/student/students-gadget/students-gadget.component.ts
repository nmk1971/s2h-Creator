import { StudentService } from './../student.service';
import { IStudent } from './../student.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
import { IApiResponse } from '../../helpers/api-response.model';


@Component({
  selector: 'app-students-gadget',
  templateUrl: './students-gadget.component.html',
  styleUrls: ['./students-gadget.component.scss']
})
export class StudentsGadgetComponent implements OnInit {

  // tslint:disable-next-line: no-output-on-prefix
  @Output() onStudentUpdateClicked = new EventEmitter<IStudent>();
  public searchText = '';
  public color = 'orange';
  public students$: Observable<IStudent[]>;
  constructor(
    private studentService: StudentService,
    private shnackBar: MatSnackBar,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.students$ = this.studentService.currentStudentList$.asObservable();
  }

  deleteStudent(id): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      data: 'Supprimer l\'Apprenant?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.studentService.deleteSudentFromAPI(id).subscribe({
          next: (response: IApiResponse) => {
            this.shnackBar.open(response.message, 'X', { duration: 4000 });
            // tslint:disable-next-line: quotemark
            if (response.status === "success") {
              this.studentService.deleteStudent(id);
            }
          },
          error: (error) => {
            this.shnackBar.open(error.message, 'X');
          },
          complete: console.log
        });
      };
    });

  }


  updateStudent(student: IStudent): void {
    this.onStudentUpdateClicked.next(student);


  }

}
