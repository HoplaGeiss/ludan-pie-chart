import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PieChartModule } from '../../projects/ngx-ludan-pie-chart/src/lib/pie-chart.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, PieChartModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
