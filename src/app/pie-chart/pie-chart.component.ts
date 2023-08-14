import { Component } from '@angular/core';
import * as Highcharts from 'highcharts'; 

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts=Highcharts
  chartOptions={}


  constructor(){
    this.chartOptions={
      chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Luminar technolab admission 2023',
        align: 'left'
    },
    subtitle: {
        align: 'left'
    },
    credits:{
      enabled:false
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
  
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer', depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'admission',
        data: [
            ['MEARN', 25],
            ['TESTING', 15],
            ["ML",10],
            ["FLUTTER", 10],
            ['JAVA SPRING', 8],
            ['PYTHON', 22]
        ]
    }]
    }
  }
}
