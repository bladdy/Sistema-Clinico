import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailReplyRoutingModule } from './email-reply-routing.module';
import { EmailReplyComponent } from './email-reply.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EmailReplyComponent
  ],
  imports: [
    CommonModule,
    EmailReplyRoutingModule,
    SharedModule
  ]
})
export class EmailReplyModule { }
