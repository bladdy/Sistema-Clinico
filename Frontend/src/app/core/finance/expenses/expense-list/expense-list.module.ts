import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseListRoutingModule } from './expense-list-routing.module';
import { ExpenseListComponent } from './expense-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSlider } from '@angular/material/slider';

@NgModule({
  declarations: [
    ExpenseListComponent
  ],
  imports: [
    CommonModule,
    ExpenseListRoutingModule,
    SharedModule,
    MatSlider
  ]
})
export class ExpenseListModule { }
