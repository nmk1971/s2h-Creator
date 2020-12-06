import { ResultsByStudentComponent } from './../../../creator/dashboard/results-by-student/results-by-student.component';
import { MatDialog } from '@angular/material/dialog';
import { ISessionDashboard } from './../session.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-session-dashboard',
  templateUrl: './session-dashboard.component.html',
  styleUrls: ['./session-dashboard.component.scss']
})
export class SessionDashboardComponent implements OnInit {
  public currentSession: ISessionDashboard;


  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {
    this.currentSession = this.route.snapshot?.data?.session.payload;
  }




  ngOnInit(): void {
  }

  public openDialog(studentId): void {
    const dialogRef = this.dialog.open(ResultsByStudentComponent, {
      width: '600px',
      data: { sessionId: this.route.snapshot.paramMap.get('id'), studentId }
    });
  }
}
