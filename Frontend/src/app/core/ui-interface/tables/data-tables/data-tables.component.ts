import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { routes } from 'src/app/shared/routes/routes';
import { DataService } from 'src/app/shared/data/data.service';
import { PaginationService } from 'src/app/shared/custom-pagination/pagination.service';
import { apiResultFormat, pageSelection } from 'src/app/shared/models/models';
export interface dataTables {
  id: number;
  name: string;
  position: string;
  office: string;
  age: string;
  startDate: string;
  salary: string;
}
export interface tablePageSize {
  skip: number;
  limit: number;
  pageSize: number;
}
@Component({
    selector: 'app-data-tables',
    templateUrl: './data-tables.component.html',
    styleUrls: ['./data-tables.component.scss'],
    standalone: false
})
export class DataTablesComponent {
  public routes = routes;
  public tableData: Array<dataTables> = [];
  // pagination variables
  public pageSize = 10;
  public serialNumberArray: Array<number> = [];
  public totalData = 0;
  showFilter = false;
  dataSource!: MatTableDataSource<dataTables>;
  public searchDataValue = '';
  // pagination variables end

  constructor(
    private data: DataService,
    private pagination: PaginationService,
    private router: Router
  ) {
    this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
      if (this.router.url == this.routes.dataTables) {
        this.getTableData({ skip: res.skip, limit: res.limit });
        this.pageSize = res.pageSize;
      }
    });
  }

  private getTableData(pageOption: pageSelection): void {
    this.data.getDataTables().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: dataTables, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.id = serialNumber;
          this.tableData.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<dataTables>(this.tableData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,

        serialNumberArray: this.serialNumberArray,
      });
    });
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
}
