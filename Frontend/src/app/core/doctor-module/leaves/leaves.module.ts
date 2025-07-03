import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeavesRoutingModule } from './leaves-routing.module';
import { LeavesComponent } from './leaves.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    LeavesComponent
  ],
  imports: [
    CommonModule,
    LeavesRoutingModule,
    SharedModule
  ]
})
export class LeavesModule { }
