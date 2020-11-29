import { ActivatedRoute } from '@angular/router';
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
  view: any[] = [200, 300];
  public sessionId;

  // options
  gradient = true;
  showLegend = true;
  showLabels = true;
  isDoughnut = false;
  legendPosition = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  constructor(
    private statisticService: StatisticsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const sessionId = this.route.snapshot.paramMap.get('id');
    console.log(sessionId);
    this.statisticService.getAllResponseBySession(sessionId)
      .subscribe(
        {
          next: (response: IApiResponse) => {

            this.data = response.payload;
            this.forGraph = this.transformResponse(this.data);
          },
          error: error => { console.log('Error:'); },
          complete: console.log
        });
    this.view = [innerWidth / 2.5, 400];
  }

  private transformResponse(data): any {
    console.log(data);
    const result = [{ name: 'Correctes', value: 0 }, { name: 'Erronées', value: 0 }];
    result[0].value = _.reduce(data, (sum, n) => {
      return sum + n.score;
    }, 0) * data[0].questions.length;

    result[1].value = data[0].questions.length * data.length - result[0].value;

    result[0].name = result[0].name + ' (' + _.round(result[0].value * 100 / (result[0].value + result[1].value)) + '%)';
    result[1].name = result[1].name + ' (' + _.round(result[1].value * 100 / (result[0].value + result[1].value)) + '%)';

    return result;
  }

  onResize(event): void {
    this.view = [event.target.innerWidth / 2.5, 400];
  }

}
