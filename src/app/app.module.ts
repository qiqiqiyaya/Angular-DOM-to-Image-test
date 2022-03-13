import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent
} from 'echarts/components';
// Import the Canvas renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
import {
  CanvasRenderer
} from 'echarts/renderers';
import { LineChart } from 'echarts/charts';

import { AppComponent } from './app.component';
import Marcaron from './marcaron';

echarts.use(
  [TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer]
);
echarts.registerTheme('macarons', Marcaron);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxEchartsModule.forRoot({ echarts }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
