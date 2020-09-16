import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creator-land-page',
  templateUrl: './creator-land-page.component.html',
  styleUrls: ['./creator-land-page.component.scss']
})
export class CreatorLandPageComponent implements OnInit {
  public isOpened=false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isOpened = !this.isOpened;
  }
}
