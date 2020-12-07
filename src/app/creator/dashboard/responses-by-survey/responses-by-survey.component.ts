import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { IApiResponse } from 'src/app/shared/helpers/api-response.model';
import { StatisticsService } from '../statistics.service';

@Component({
  selector: 'app-responses-by-survey',
  templateUrl: './responses-by-survey.component.html',
  styleUrls: ['./responses-by-survey.component.scss']
})
export class ResponsesBySurveyComponent implements OnInit {
  public data: any;
  public forGraph: any;
  view: any[] = [200, 300];
  public sessionId;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Propositions';
  showYAxisLabel = true;
  yAxisLabel = 'Choix';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA', '#FAA454', '#A1FA28', '#C7BFFC', '#CD457A']
  };
  constructor(
    private statisticService: StatisticsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const sessionId = this.route.snapshot.paramMap.get('id');

    this.statisticService.getAllResponseBySession(sessionId)
      .subscribe(
        {
          next: (response: IApiResponse) => {

            this.data = response.payload;
            console.log(this.data);
            this.forGraph = this.transformResponse(this.data);
          },
          error: error => { console.log('Error:'); },
          complete: console.log
        });
    this.view = [innerWidth / 2.5, 400];
  }

  private transformResponse(data): any {
    let questions = data.map(resp => resp.questions);
    questions = _.flatten(questions);
    const res = _.groupBy(questions, '_id');
    const res1 = _.values(res);
    const result = res1.map(quest => {
      const tmpQuest = { name: quest[0].questionText, series: [] };
      tmpQuest.series = quest[0].qcxResponse.map(r => {
        const tmpResp = { name: r.label, value: 0 };
        tmpResp.value = _.reduce(quest, (cpt, elm) => {
          const validResponses = _.find(elm.qcxResponse, o => ((o.label === r.label) && (o.isValid === true)));
          if (validResponses) {
            return cpt + 1;
          }
          return cpt;
        }, 0);
        return tmpResp;
      });
      return (tmpQuest);
    });

    console.log(result);

    return (result);
  }


  onResize(event): void {
    this.view = [event.target.innerWidth / 2.5, 400];
  }

}
