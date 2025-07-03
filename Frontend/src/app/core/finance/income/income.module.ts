import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeRoutingModule } from './income-routing.module';
import { IncomeComponent } from './income.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSlider } from '@angular/material/slider';

@NgModule({
  declarations: [
    IncomeComponent
  ],
  imports: [
    CommonModule,
    IncomeRoutingModule,
    SharedModule,
    MatSlider
  ]
})
export class IncomeModule { }
