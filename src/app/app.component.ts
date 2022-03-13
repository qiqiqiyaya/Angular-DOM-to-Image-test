import { Component, ViewChild } from '@angular/core';
import domToImage from 'dom-to-image';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-DOM-to-Image-test';
  options:EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  @ViewChild('container', { static: true }) container: any;

  ngOnInit() {

  }

  ngAfterViewInit(){
    setTimeout(() => {
      debugger;
      domToImage.toPng(this.container.nativeElement)
        .then(function (dataUrl: any) {
          debugger;
          var img = new Image();
          img.src = dataUrl;
          document.body.appendChild(img);
        })
        .catch(function (error: any) {
          console.error('oops, something went wrong!', error);
        })
    }
      , 1000);
  }
}
