import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgOtpInputComponent } from 'ng-otp-input';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-two-step-verification',
  standalone: false,
  templateUrl: './two-step-verification.component.html',
  styleUrl: './two-step-verification.component.scss'
})
export class TwoStepVerificationComponent {
 routes=routes
 value : any
@ViewChild('otpRef', { static: false }) otpInput?: NgOtpInputComponent;

  handleOtpChange(value: string) {
    console.log('OTP Changed:', value);
  }
  resetOtp() {
    this.otpInput?.setValue('');
  }
  constructor(private router:Router){}
  pageRedirect(){
    this.router.navigate([routes.resetPasswordBasic])
  }
}
