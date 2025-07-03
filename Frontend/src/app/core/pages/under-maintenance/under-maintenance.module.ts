import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnderMaintenanceRoutingModule } from './under-maintenance-routing.module';
import { UnderMaintenanceComponent } from './under-maintenance.component';


@NgModule({
  declarations: [
    UnderMaintenanceComponent
  ],
  imports: [
    CommonModule,
    UnderMaintenanceRoutingModule
  ]
})
export class UnderMaintenanceModule { }
