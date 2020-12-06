import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StatisticsService } from '../statistics.service';
import { IApiResponse } from 'src/app/shared/helpers/api-response.model';
@Component({
  selector: 'app-student-evolution',
  templateUrl: './student-evolution.component.html',
  styleUrls: ['./student-evolution.component.scss']
})
export class StudentEvolutionComponent implements OnInit {
  public studentId: string;
  public responses = [];
  public forGraph: any;
  public isLoadingResults = false;

  view: any[] = [700, 400];

  // options
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  yAxisLabel = 'Score (%)';
  timeline = true;
  legendPosition = 'below';

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(
    private statisticService: StatisticsService,
    public dialogRef: MatDialogRef<StudentEvolutionComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    this.studentId = data.studentId;
    this.isLoadingResults = true;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.statisticService.getAllResponseByStudent(this.studentId)
      .subscribe(
        {
          next: (response: IApiResponse) => {
            this.isLoadingResults = true;
            this.responses = response.payload;
            this.forGraph = this.transformResponse(this.responses);

          },
          error: error => { console.log('Error:'); },
          complete: () => { this.isLoadingResults = false; }
        });

  }
  private transformResponse(data): any {
    const result = [{ name: '', series: [] }];
    if (data.length !== 0) {
      result[0].name = data[0].studentFullName;
      result[0].series = data.map(r => ({ name: r.responseDateTime, value: r.score * 100 }));
    }
    return result;
  }
  confirm(): void {
    this.dialogRef.close(false);
  }
}
