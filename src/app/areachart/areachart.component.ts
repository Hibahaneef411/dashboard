import { Component } from '@angular/core';
import * as Highcharts from 'highcharts'; 

@Component({
  selector: 'app-areachart',
  templateUrl: './areachart.component.html',
  styleUrls: ['./areachart.component.css']
})
export class AreachartComponent {
  Highcharts=Highcharts
  chartOptions={ }
  

  constructor(){
    this.chartOptions={
             chart: {
        renderTo: 'container',
        type: 'column',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            depth: 50,
            viewDistance: 25
        }
    },
    xAxis: {
        categories: ['Mearn', 'python', 'Data science', 'Flutter', '.NET', 'Testing',
            'Java spring', 'M.L', 'A.I', 'Big data']
    },
    yAxis: {
        title: {
            enabled: false
        }
    },
    tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: 'placements: {point.y}'
    },
    title: {
        text: 'Yearly Placement Analysis, 2022-23',
        align: 'center'
    },
    subtitle: {
        text: 'LUMINAR TECHNOLAB',
        align: 'center'
    },
    legend: {
        enabled: false
    },

    credits:{
      enabled:false
    },
    plotOptions: {
        column: {
            depth: 25
        }
    },
    series: [{
        data: [1318, 1073, 1060, 813, 775, 745, 537, 444, 416, 395],
        colorByPoint: true
    }]
}



    }
  }

