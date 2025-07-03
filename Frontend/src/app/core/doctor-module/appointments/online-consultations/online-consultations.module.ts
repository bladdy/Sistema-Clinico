import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineConsultationsRoutingModule } from './online-consultations-routing.module';
import { OnlineConsultationsComponent } from './online-consultations.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    OnlineConsultationsComponent
  ],
  imports: [
    CommonModule,
    OnlineConsultationsRoutingModule,
    SharedModule
  ]
})
export class OnlineConsultationsModule { }
