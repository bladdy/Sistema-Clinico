import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulesRoutingModule } from './schedules-routing.module';
import { SchedulesComponent } from './schedules.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SchedulesComponent
  ],
  imports: [
    CommonModule,
    SchedulesRoutingModule,
    SharedModule
  ]
})
export class SchedulesModule { }
