import { PieChartItem } from 'projects/ngx-ludan-pie-chart/src/public-api';
import { Component, OnInit } from '@angular/core';
import { GenerateDataService } from 'projects/ngx-ludan-pie-chart/src/public-api';

const AMPLITUDE = 100;

@Component({
  selector: 'app-root',
  template: `
    <ludan-pie-chart [data]="data" [colours]="colours"></ludan-pie-chart>
  `
})
export class AppComponent implements OnInit {
  data: PieChartItem[];
  colours = ['#e3875a', '#e3655a', '#e3e15a'];
  names = ['Apples', 'Oranges', 'Grapes'];

  constructor(private generateDataService: GenerateDataService) {}

  ngOnInit() {
    this.data = this.generateDataService.generateData(AMPLITUDE, this.names);
    setInterval(() => {
      this.data = this.generateDataService.generateData(AMPLITUDE, this.names);
    }, 4000);
  }
}
