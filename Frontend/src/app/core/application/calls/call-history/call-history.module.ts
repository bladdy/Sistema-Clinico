import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallHistoryRoutingModule } from './call-history-routing.module';
import { CallHistoryComponent } from './call-history.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CallHistoryComponent
  ],
  imports: [
    CommonModule,
    CallHistoryRoutingModule,
    SharedModule
  ]
})
export class CallHistoryModule { }
