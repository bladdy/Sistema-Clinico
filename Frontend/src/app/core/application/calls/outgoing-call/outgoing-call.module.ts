import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OutgoingCallRoutingModule } from './outgoing-call-routing.module';
import { OutgoingCallComponent } from './outgoing-call.component';


@NgModule({
  declarations: [
    OutgoingCallComponent
  ],
  imports: [
    CommonModule,
    OutgoingCallRoutingModule
  ]
})
export class OutgoingCallModule { }
