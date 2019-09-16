import { Injectable } from '@angular/core';
import { PieChartItem } from './pie-chart.model';

@Injectable()
export class GenerateDataService {
  generateData = (amplitude: number, names: string[]): PieChartItem[] => {
    let items = [];
    const length = Math.floor(1 + Math.random() * amplitude);

    for (let i = 0; i < length; i++) {
      const item = {
        id: i,
        name: names[Math.floor(Math.random() * names.length)]
      };

      items = [...items, item];
    }

    return items;
  }
}
