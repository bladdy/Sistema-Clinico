import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PaginationService, tablePageSize } from 'src/app/shared/custom-pagination/pagination.service';
import { DataService } from 'src/app/shared/data/data.service';
import { apiResultFormat, hrm, pageSelection } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';
interface variable {
    data: string,
}
@Component({
  selector: 'app-departments',
  standalone: false,
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss'
})
export class DepartmentsComponent {
  designation!: variable[];
  status!: variable[];
  selectedDesignation!: variable[];
  selectedStatus!: variable[];
  routes=routes
public pageSize = 10;
public tableData: hrm[] = [];
public tableDataCopy: hrm[] = [];
public actualData: hrm[] = [];
public currentPage = 1;
public skip = 0;
public limit: number = this.pageSize;
public serialNumberArray: number[] = [];
public totalData = 0;
public pageSelection: pageSelection[] = [];
dataSource!: MatTableDataSource<hrm>;
public searchDataValue = '';
public row=true;
constructor(
  private data: DataService,
  private router: Router,
  private pagination: PaginationService
) {
  
  
          this.designation = [
              {data: 'Nursing'},
              {data: 'Pharmacy'},
              {data: 'Laboratory'},
              {data: 'Biling'}
          ];
          this.selectedDesignation = [this.designation[0]];

          this.status = [
              {data: 'Active'},
              {data: 'Inactive'},
          ];
          this.selectedStatus = [this.status[0]];
  this.data.getDepartments().subscribe((apiRes: apiResultFormat) => {
    this.actualData = apiRes.data;
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.departments) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  });
}
private getTableData(pageOption: pageSelection): void {
  this.data.getDepartments().subscribe((apiRes: apiResultFormat) => {
    this.tableData = [];
    this.tableDataCopy = [];
    this.serialNumberArray = [];
    this.totalData = apiRes.totalData;
    apiRes.data.map((res: hrm, index: number) => {
      const serialNumber = index + 1;
      if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
        res.sNo = serialNumber;
        this.tableData.push(res);
        this.tableDataCopy.push(res);
        this.serialNumberArray.push(serialNumber);
      }
    });
    this.dataSource = new MatTableDataSource<hrm>(this.actualData);
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
