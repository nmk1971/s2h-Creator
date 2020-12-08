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
  public forEvaluationTypeGraph: any;
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

  evaluationType_view: any[] = [700, 200];

  // options
  evaluationType_showXAxis = true;
  evaluationType_showYAxis = true;
  evaluationType_gradient = false;
  evaluationType_showLegend = true;
  evaluationType_showXAxisLabel = false;
  evaluationType_yAxisLabel = 'Type d\'évaluation';
  evaluationType_showYAxisLabel = true;
  evaluationType_xAxisLabel = '';

  evaluationType_colorScheme = {
    domain: ['#5AA454', '#F70F2C', '#AAAAAA']
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
            this.forEvaluationTypeGraph = this.transformResponseEvaluationType(this.data);
   //         console.dir(this.data);
          },
          error: error => { console.log('Error:'); },
          complete: console.log
        });
    this.view = [innerWidth / 1.1, 400];
    this.evaluationType_view = [innerWidth / 2.2, 200];
  }

  private transformResponse(data): any {
    const res = _.groupBy(data, 'sessionId');
    const res1 = _.values(res);
    const result = res1.map((r, index) => {
      if (r[0].evaluationType!=='Sondage'){
      const tmp = { name: '', value: 0 };
      // tmp.name = r[0].quizTitle + ' (' + r[0].groupLabel + ')';
      tmp.name = r[0].quizTitle + ' (' + (index + 1).toString() + ')';
      tmp.value = _.reduce(r, (sum, n) => {
        return sum + n.score;
      }, 0) * 100 / r.length;
      return tmp;
    }
    });
    return _.compact(result);
  }

  private transformResponseEvaluationType(data): any {
    const res = _.groupBy(data, 'evaluationType');
    const res1 = _.values(res);
 //   console.log(res1);
    const result = res1.map((et, index) => {
      if (et[0].evaluationType !== 'Sondage') {
        const tmp = { name: '', series: [] };
        // tmp.name = r[0].quizTitle + ' (' + r[0].groupLabel + ')';
        tmp.name = et[0].evaluationType;
        tmp.series = [{ name: '>=50%', value: 0 }, { name: '<50%', value: 0 }];
        tmp.series[0].value = _.filter(et, o => o.score >= 0.5).length;
        tmp.series[1].value = _.filter(et, o => o.score < 0.5).length;
        return tmp;
      }
    });
 //   console.log(result);
    return _.compact(result);
  }

  onResize(event): void {
    this.view = [event.target.innerWidth / 1.1, 400];
    this.evaluationType_view = [innerWidth / 2.2, 200];
  }

}
