import { IApiResponse } from './../../../shared/helpers/api-response.model';
import { AuthenticationService } from './../../../shared/user/authentication.service';
import { StatisticsService } from './../statistics.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-stat-avg-quiz',
  templateUrl: './stat-avg-quiz.component.html',
  styleUrls: ['./stat-avg-quiz.component.scss']
})
export class StatAvgQuizComponent implements OnInit {
  public data: any;
  public forGraph: any;
  view: any[] = [700, 400];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Session';
  showYAxisLabel = true;
  yAxisLabel = 'Moyenne (%)';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#500454', '#A19978', '#07B42C', '#BBBBBB']
  };

  constructor(
    private statisticService: StatisticsService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.statisticService.getAllResponseByCreator(this.authenticationService.currentUserValue._id)
      .subscribe(
        {
          next: (response: IApiResponse) => {

            this.data = response.payload;
            this.forGraph = this.transformResponse(this.data);
          },
          error: error => { console.log('Error:'); },
          complete: console.log
        });
    this.view = [innerWidth / 1.1, 400];
  }

  private transformResponse(data): any {
    const res = _.groupBy(data, 'sessionId');
    const res1 = _.values(res);
    const result = res1.map((r, index)  => {
      const tmp = { name: '', value: 0 };
     // tmp.name = r[0].quizTitle + ' (' + r[0].groupLabel + ')';
      tmp.name = r[0].quizTitle + ' (' + (index + 1).toString() + ')';
      tmp.value = _.reduce(r, (sum, n) => {
        return sum + n.score;
      }, 0) * 100 / r.length;
      return tmp;
    });
    return result;
  }

  onResize(event): void {
    this.view = [event.target.innerWidth / 1.1, 400];
}

}
