import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexGrid,
  ApexResponsive,
} from 'ng-apexcharts';
import { routes } from 'src/app/shared/routes/routes';

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  xaxis: ApexXAxis | any;
  fill: ApexFill | any;
  tooltip: ApexTooltip | any;
  stroke: ApexStroke | any;
  legend: ApexLegend | any;
  title: ApexTitleSubtitle | any;
  colors: string[] | any;
  subtitle: ApexTitleSubtitle | any;
  grid: ApexGrid | any;
  responsive:ApexResponsive | any;
  labels:ApexDataLabels | any;

};
@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
routes=routes
  addtime2: Date | undefined;
  addtime: Date | undefined;
@ViewChild('chart') chart!: ChartComponent;
public totalChart: Partial<ChartOptions>;
public onlineChart: Partial<ChartOptions>;
public cancelledChart: Partial<ChartOptions>;
public appointmentChart: Partial<ChartOptions>;
public circleChart: Partial<ChartOptions>;
constructor(){
      this.totalChart={
        chart: {
          type: 'bar',
          height: 60,
          width: 100,
          toolbar: { show: false },
          sparkline: { enabled: true }
        },
        plotOptions: {
          bar: {
            columnWidth: '40%',
            borderRadius: 2, // Rounded top
            endingShape: 'rounded'
          }
        },
        stroke: {
          show: false
        },
        fill: {
          colors: ['#2e3192']  // Blue color matching the image
        },
        dataLabels: { enabled: false },
        series: [{
          name: 'Data',
          data: [40, 60, 55, 80, 35, 70, 60]  // Match the number of bars and shape
        }],
        xaxis: {
          labels: { show: false },
          axisTicks: { show: false },
          axisBorder: { show: false }
        },
        yaxis: { show: false },
        grid: { show: false },
        tooltip: { enabled: false }
      }
      this.onlineChart= {
        chart: {
          type: 'bar',
          height: 60,
          width: 100,
          toolbar: { show: false },
          sparkline: { enabled: true }
        },
        plotOptions: {
          bar: {
            columnWidth: '40%',
            borderRadius: 0, // Rounded top
            endingShape: 'rounded'
          }
        },
        stroke: {
          show: false
        },
        fill: {
          colors: ['#E04F16']  // Blue color matching the image
        },
        dataLabels: { enabled: false },
        series: [{
          name: 'Data',
          data: [40, 60, 40, 60, 75, 40, 75]  // Match the number of bars and shape
        }],
        xaxis: {
          labels: { show: false },
          axisTicks: { show: false },
          axisBorder: { show: false }
        },
        yaxis: { show: false },
        grid: { show: false },
        tooltip: { enabled: false }
      }
      this.cancelledChart={
        chart: {
          type: 'bar',
          height: 60,
          width: 100,
          toolbar: { show: false },
          sparkline: { enabled: true }
        },
        plotOptions: {
          bar: {
            columnWidth: '40%',
            borderRadius: 2, // Rounded top
            endingShape: 'rounded'
          }
        },
        stroke: {
          show: false
        },
        fill: {
          colors: ['#0E9384']  // Blue color matching the image
        },
        dataLabels: { enabled: false },
        series: [{
          name: 'Data',
          data: [20, 35, 30, 50, 60, 35, 25, 45]  // Match the number of bars and shape
        }],
        xaxis: {
          labels: { show: false },
          axisTicks: { show: false },
          axisBorder: { show: false }
        },
        yaxis: { show: false },
        grid: { show: false },
        tooltip: { enabled: false }
      }
      this.appointmentChart= {
    chart: {
      height: 250,
      type: 'line',
      toolbar: { show: false },
      stacked: false
    },
    stroke: {
      width: [0, 2],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '15%',
        borderRadius: 4
      }
    },
    dataLabels: {
      enabled: false
    },
    series: [
      {
        name: 'Total Appointments',
        type: 'bar',
        data: [360, 280, 290, 270, 340, 220, 230, 180, 260, 200, 350, 400]
      },
      {
        name: 'Completed',
        type: 'area',
        data: [200, 195, 190, 185, 200, 160, 170, 165, 210, 215, 225, 230]
      }
    ],
    fill: {
      type: ['solid', 'gradient'],
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 90, 100],
        colorStops: [
          {
            offset: 0,
            color: "#434BAD",
            opacity: 0.4
          },
          {
            offset: 100,
            color: "#ffffff",
            opacity: 0
          }
        ]
      }
    },
    colors: ['#3B28CC', '#00B96B'],
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        style: {
          fontSize: '13px'
        }
      }
    },
    yaxis: {
      min: 0,
      max: 400,
      labels: {
        style: {
          fontSize: '13px'
        },
        offsetX: -10  // Moves Y-axis labels 10px to the left
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      custom: function({ series, dataPointIndex, w }:any) {
        const total = series[0][dataPointIndex];
        const completed = series[1][dataPointIndex];
        return `<div class="apex-tooltip">
          <strong>${w.globals.labels[dataPointIndex]}</strong><br/>
          <span style="color:#3B28CC">●</span> Total Appointments: ${total}<br/>
          <span style="color:#00B96B">●</span> Completed: ${completed}
        </div>`;
      }
    },
    legend: { show: false },
    grid: {
      borderColor: '#eee',
      strokeDashArray: 4,
      padding: {
        left: 0,   // Adjust as needed to ensure labels aren't cut off
        right: -10
      }
    }
      }
      this.circleChart={
      chart: {
        type: 'donut',
        height: 270,
        width: '100%'
      },
      series: [80, 10, 10],
      labels: ['Completed', 'Pending', 'Cancelled'],
      colors: ['#27AE60', '#E2B93B', '#EF1E1E'],  // green, yellow, red
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 2,
        colors: ['#fff']
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
            labels: {
              show: false // center labels hidden to match your image
            }
          }
        }
      },
      tooltip: {
        enabled: true
      },
     
    }
}
}
