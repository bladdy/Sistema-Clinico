import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescriptionDetailsRoutingModule } from './prescription-details-routing.module';
import { PrescriptionDetailsComponent } from './prescription-details.component';


@NgModule({
  declarations: [
    PrescriptionDetailsComponent
  ],
  imports: [
    CommonModule,
    PrescriptionDetailsRoutingModule
  ]
})
export class PrescriptionDetailsModule { }
