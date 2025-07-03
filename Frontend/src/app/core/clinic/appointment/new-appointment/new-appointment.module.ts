import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewAppointmentRoutingModule } from './new-appointment-routing.module';
import { NewAppointmentComponent } from './new-appointment.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    NewAppointmentComponent
  ],
  imports: [
    CommonModule,
    NewAppointmentRoutingModule,
    SharedModule
  ]
})
export class NewAppointmentModule { }
