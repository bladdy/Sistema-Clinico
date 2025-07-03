import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeaveTypeRoutingModule } from './leave-type-routing.module';
import { LeaveTypeComponent } from './leave-type.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LeaveTypeComponent
  ],
  imports: [
    CommonModule,
    LeaveTypeRoutingModule,
    SharedModule
  ]
})
export class LeaveTypeModule { }
