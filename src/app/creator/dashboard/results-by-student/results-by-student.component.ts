import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StatisticsService } from '../statistics.service';
import { IApiResponse } from 'src/app/shared/helpers/api-response.model';
@Component({
  selector: 'app-results-by-student',
  templateUrl: './results-by-student.component.html',
  styleUrls: ['./results-by-student.component.scss']
})
export class ResultsByStudentComponent implements OnInit {
  public studentId: string;
  public sessionId: string;
  public response;

  constructor(
    private statisticService: StatisticsService,
    public dialogRef: MatDialogRef<ResultsByStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.sessionId = data.sessionId;
    this.studentId = data.studentId;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

    this.statisticService.getAllResponseBySessionByStudent(this.sessionId, this.studentId)


      .subscribe(
        {
          next: (response: IApiResponse) => {

            this.response = response.payload[0];

          },
          error: error => { console.log('Error:'); },
          complete: console.log
        });

  }

  confirm(): void {
    this.dialogRef.close(false);
  }
}



