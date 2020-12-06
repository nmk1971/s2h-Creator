import { Component, OnInit } from '@angular/core';
import { IApiResponse } from 'src/app/shared/helpers/api-response.model';
import { AuthenticationService } from 'src/app/shared/user/authentication.service';
import { StatisticsService } from '../dashboard/statistics.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public data: any;
  constructor(
    private statisticService: StatisticsService,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.statisticService.getDashboard()
      .subscribe(
        {
          next: (response: IApiResponse) => {

            this.data = response.payload;
          },
          error: error => { console.log('Error:'); },
          complete: console.log
        });
  }


}
