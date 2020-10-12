import { ISessionDashboard } from './../session.model';
import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-session-dashboard',
  templateUrl: './session-dashboard.component.html',
  styleUrls: ['./session-dashboard.component.scss']
})
export class SessionDashboardComponent implements OnInit {
  public currentSession: ISessionDashboard;
  constructor(private route: ActivatedRoute) {
    this.currentSession = this.route.snapshot?.data?.session;
   }

  ngOnInit(): void {
  }

}
