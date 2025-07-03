import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-success',
  standalone: false,
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent {
 public routes = routes;
  constructor(private router:Router){
    
  }
  pageRedirect(){
    this.router.navigate([routes.loginCover])
  }
}
