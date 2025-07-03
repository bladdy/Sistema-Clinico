import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescriptionsRoutingModule } from './prescriptions-routing.module';
import { PrescriptionsComponent } from './prescriptions.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PrescriptionsComponent
  ],
  imports: [
    CommonModule,
    PrescriptionsRoutingModule,
    SharedModule
  ]
})
export class PrescriptionsModule { }
