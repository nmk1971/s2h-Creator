import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.scss']
})
export class SessionFormComponent implements OnInit {
  public list=[1,2,3];
  constructor() { }

  ngOnInit(): void {
  }

}
