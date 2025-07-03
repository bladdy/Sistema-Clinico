import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-password-settings',
  standalone: false,
  templateUrl: './password-settings.component.html',
  styleUrl: './password-settings.component.scss'
})
export class PasswordSettingsComponent {
routes=routes
password:boolean[]=[false];
togglePassword(index:number):void{
  this.password[index]=!this.password[index]
}
}
