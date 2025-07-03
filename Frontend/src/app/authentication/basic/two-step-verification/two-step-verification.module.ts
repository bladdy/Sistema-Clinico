import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoStepVerificationRoutingModule } from './two-step-verification-routing.module';
import { TwoStepVerificationComponent } from './two-step-verification.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgOtpInputComponent } from 'ng-otp-input';

@NgModule({
  declarations: [
    TwoStepVerificationComponent
  ],
  imports: [
    CommonModule,
    TwoStepVerificationRoutingModule,
    SharedModule,
    NgOtpInputComponent
  ]
})
export class TwoStepVerificationModule { }
