import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator-land-page',
  templateUrl: './creator-land-page.component.html',
  styleUrls: ['./creator-land-page.component.scss']
})
export class CreatorLandPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  log(msg) {
    console.log(msg);
  }
}
