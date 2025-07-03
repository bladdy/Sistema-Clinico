import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavesListRoutingModule } from './leaves-list-routing.module';
import { LeavesListComponent } from './leaves-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    LeavesListComponent
  ],
  imports: [
    CommonModule,
    LeavesListRoutingModule,
    SharedModule,
        FormsModule,
    ReactiveFormsModule, 
    MultiSelectModule,
    BsDatepickerModule

  ]
})
export class LeavesListModule { }
