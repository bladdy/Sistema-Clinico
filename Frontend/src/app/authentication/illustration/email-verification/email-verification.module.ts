import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailVerificationRoutingModule } from './email-verification-routing.module';
import { EmailVerificationComponent } from './email-verification.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EmailVerificationComponent
  ],
  imports: [
    CommonModule,
    EmailVerificationRoutingModule,
    SharedModule
  ]
})
export class EmailVerificationModule { }
