import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-email-verification',
  standalone: false,
  templateUrl: './email-verification.component.html',
  styleUrl: './email-verification.component.scss'
})
export class EmailVerificationComponent {
  routes=routes
  constructor(private router:Router){}
  pageRedirect(){
    this.router.navigate([routes.twoStepVerificationCover])
  }
}
