import { SumPipe } from './sum.pipe';
import { GenerateDataService } from './generate-data.service';
import { NgModule } from '@angular/core';
import { PieChartComponent } from './pie-chart.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [PieChartComponent, SumPipe],
  providers: [GenerateDataService],
  exports: [PieChartComponent]
})
export class PieChartModule {}
