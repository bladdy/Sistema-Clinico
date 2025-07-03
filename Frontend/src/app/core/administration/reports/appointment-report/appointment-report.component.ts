import { Component, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PaginationService, tablePageSize } from 'src/app/shared/custom-pagination/pagination.service';
import { DataService } from 'src/app/shared/data/data.service';
import { apiResultFormat, pageSelection, reports } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';
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
  selector: 'app-appointment-report',
  standalone: false,
  templateUrl: './appointment-report.component.html',
  styleUrl: './appointment-report.component.scss'
})
export class AppointmentReportComponent {
routes=routes
  tags=['Received', 'Pending'];
    bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  @ViewChild('chart') chart!: ChartComponent;
public barChart: Partial<ChartOptions>;
public barChart1: Partial<ChartOptions>;
public barChart2: Partial<ChartOptions>;
public barChart3: Partial<ChartOptions>;

public pageSize = 10;
public tableData: reports[] = [];
public tableDataCopy: reports[] = [];
public actualData: reports[] = [];
public currentPage = 1;
public skip = 0;
public limit: number = this.pageSize;
public serialNumberArray: number[] = [];
public totalData = 0;
public pageSelection: pageSelection[] = [];
dataSource!: MatTableDataSource<reports>;
public searchDataValue = '';
public row=true;
constructor(
  private data: DataService,
  private router: Router,
  private pagination: PaginationService
) {
     this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  this.data.getAppointmentReport().subscribe((apiRes: apiResultFormat) => {
    this.actualData = apiRes.data;
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.appointmentReport) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  });
  this.barChart={
    chart: {
      width: 56,
      height: 40,
      type: 'bar',
      toolbar: { show: false },
      sparkline: { enabled: true }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        borderRadius: 0,
        endingShape: 'rounded'
      }
    },
    dataLabels: { enabled: false },
    stroke: { show: false },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "vertical",
        colorStops: [
          {
            offset: 0,
            color: "#ffffff",
            opacity: 1
          },
          {
            offset: 100,
            color: "#2E37A4",
            opacity: 1
          }
        ]
      }
    },
    series: [{
      name: 'Data',
      data: [40, 50, 100, 100, 70]
    }],
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: { show: false },
    grid: { show: false },
    tooltip: { enabled: false }
  };
  this.barChart1= {
    chart: {
      width: 56,
      height: 40,
      type: 'bar',
      toolbar: { show: false },
      sparkline: { enabled: true }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        borderRadius: 0,
        endingShape: 'rounded'
      }
    },
    dataLabels: { enabled: false },
    stroke: { show: false },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "vertical",
        colorStops: [
          {
            offset: 0,
            color: "#ffffff",
            opacity: 1
          },
          {
            offset: 100,
            color: "#27AE60",
            opacity: 1
          }
        ]
      }
    },
    series: [{
      name: 'Data',
      data: [40, 50, 100, 100, 70]
    }],
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: { show: false },
    grid: { show: false },
    tooltip: { enabled: false }
  };
  this.barChart2={
    chart: {
      width: 56,
      height: 40,
      type: 'bar',
      toolbar: { show: false },
      sparkline: { enabled: true }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        borderRadius: 0,
        endingShape: 'rounded'
      }
    },
    dataLabels: { enabled: false },
    stroke: { show: false },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "vertical",
        colorStops: [
          {
            offset: 0,
            color: "#ffffff",
            opacity: 1
          },
          {
            offset: 100,
            color: "#E2B93B",
            opacity: 1
          }
        ]
      }
    },
    series: [{
      name: 'Data',
      data: [40, 50, 100, 100, 70]
    }],
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: { show: false },
    grid: { show: false },
    tooltip: { enabled: false }
  };
  this.barChart3= {
    chart: {
      width: 56,
      height: 40,
      type: 'bar',
      toolbar: { show: false },
      sparkline: { enabled: true }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '70%',
        borderRadius: 0,
        endingShape: 'rounded'
      }
    },
    dataLabels: { enabled: false },
    stroke: { show: false },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "vertical",
        colorStops: [
          {
            offset: 0,
            color: "#ffffff",
            opacity: 1
          },
          {
            offset: 100,
            color: "#EF1E1E",
            opacity: 1
          }
        ]
      }
    },
    series: [{
      name: 'Data',
      data: [40, 50, 100, 100, 70]
    }],
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: { show: false },
    grid: { show: false },
    tooltip: { enabled: false }
  };
}
private getTableData(pageOption: pageSelection): void {
  this.data.getAppointmentReport().subscribe((apiRes: apiResultFormat) => {
    this.tableData = [];
    this.tableDataCopy = [];
    this.serialNumberArray = [];
    this.totalData = apiRes.totalData;
    apiRes.data.map((res: reports, index: number) => {
      const serialNumber = index + 1;
      if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
        res.sNo = serialNumber;
        this.tableData.push(res);
        this.tableDataCopy.push(res);
        this.serialNumberArray.push(serialNumber);
      }
    });
    this.dataSource = new MatTableDataSource<reports>(this.actualData);
    this.pagination.calculatePageSize.next({
      totalData: this.totalData,
      pageSize: this.pageSize,
      tableData: this.tableData,
      serialNumberArray: this.serialNumberArray,
    });
  });
}

public searchData(value: string): void {
  this.searchDataValue = value.trim().toLowerCase();
  this.dataSource.filter = this.searchDataValue;
  this.tableData = this.dataSource.filteredData;
  this.row = this.tableData.length > 0;

  if (this.searchDataValue !== '') {
    // Handle filtered data
    this.pagination.calculatePageSize.next({
      totalData: this.tableData.length,
      pageSize: this.pageSize,
      tableData: this.tableData,
      serialNumberArray: this.tableData.map((_, i) => i + 1), // Generates serials like [1, 2, 3...]
    });
  } else {
    // Handle reset to full data
    this.pagination.calculatePageSize.next({
      totalData: this.totalData,
      pageSize: this.pageSize,
      tableData: this.tableData,
      serialNumberArray: this.serialNumberArray,
    });
  }
}

public sortData(sort: Sort) {
  const data = this.tableData.slice();

  if (!sort.active || sort.direction === '') {
    this.tableData = data;
  } else {
    this.tableData = data.sort((a, b) => {
      const aValue = (a as never)[sort.active];

      const bValue = (b as never)[sort.active];
      return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
    });
  }
}
public changePageSize(pageSize: number): void {
  this.pageSelection = [];
  this.limit = pageSize;
  this.skip = 0;
  this.currentPage = 1;
  this.pagination.tablePageSize.next({
    skip: this.skip,
    limit: this.limit,
    pageSize: this.pageSize,
  });
}
}
