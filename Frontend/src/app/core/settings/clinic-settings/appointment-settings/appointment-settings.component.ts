import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-appointment-settings',
  standalone: false,
  templateUrl: './appointment-settings.component.html',
  styleUrl: './appointment-settings.component.scss'
})
export class AppointmentSettingsComponent {
routes=routes

trash:boolean=false;
isTrash():void{
  this.trash=true;
}
  formData: any[] = []; 

  addNewRow() {
    this.formData.push({});
  }

  removeRow(index: number) {
      this.formData.splice(index, 1);
  }
  trackByIndex(index: number, item: any) {
    return index;
  }
}
