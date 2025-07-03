import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-reset-password',
  standalone: false,
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  public routes = routes;
  passwordClass:boolean[] = [false];
  togglePassword(index:number):void{
    this.passwordClass[index] = !this.passwordClass[index];
  }
  constructor(private router:Router){
    
  }
  pageRedirect(){
    this.router.navigate([routes.successIllustration])
  }
}
