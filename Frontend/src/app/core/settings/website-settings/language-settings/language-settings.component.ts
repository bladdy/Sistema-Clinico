import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-language-settings',
  standalone: false,
  templateUrl: './language-settings.component.html',
  styleUrl: './language-settings.component.scss'
})
export class LanguageSettingsComponent {
routes=routes
isActive:boolean[]=[false];
toggleActive(index:number):void{
  this.isActive[index]=!this.isActive[index]
}
}
