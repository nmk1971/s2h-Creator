import { Component, OnInit } from '@angular/core';
import { IApiResponse } from './../../../shared/helpers/api-response.model';
import { AuthenticationService } from './../../../shared/user/authentication.service';
import { StatisticsService } from './../statistics.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-correct-responses-by-session',
  templateUrl: './correct-responses-by-session.component.html',
  styleUrls: ['./correct-responses-by-session.component.scss']
})
export class CorrectResponsesBySessionComponent implements OnInit {
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
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor(
    private statisticService: StatisticsService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    console.log(this.authenticationService.currentUserValue._id);
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
    const result = res1.map(r => {
      const tmp = { name: '', value: 0 };
      tmp.name = r[0].quizTitle + ' (' + r[0].groupLabel?r[0].groupLabel:'Anonyme' + ')';
      tmp.value = _.reduce(r, function(sum, n) {
        return sum + n.score;
      }, 0) * 100 / r.length;
      return tmp;
    });
    console.log(res1);
    console.log(result);
    return result;
  }

  onResize(event) {
    this.view = [event.target.innerWidth / 1.1, 400];
}

}