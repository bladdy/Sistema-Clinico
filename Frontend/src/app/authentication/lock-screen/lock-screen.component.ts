import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';

@Component({
    selector: 'app-lock-screen',
    templateUrl: './lock-screen.component.html',
    styleUrls: ['./lock-screen.component.scss'],
    standalone: false
})
export class LockScreenComponent {
  public routes = routes;
  public passwordClass = false;
  togglePassword() {
    this.passwordClass = !this.passwordClass;
  }
  constructor(private router:Router){
    
  }
  pageRedirect(){
    this.router.navigate([routes.index])
  }
}
