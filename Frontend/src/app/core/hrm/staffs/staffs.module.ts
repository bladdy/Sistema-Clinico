import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffsRoutingModule } from './staffs-routing.module';
import { StaffsComponent } from './staffs.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StaffsComponent
  ],
  imports: [
    CommonModule,
    StaffsRoutingModule,
    SharedModule
  ]
})
export class StaffsModule { }
