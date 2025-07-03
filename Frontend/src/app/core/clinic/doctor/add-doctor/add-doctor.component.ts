import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-add-doctor',
  standalone: false,
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.scss'
})
export class AddDoctorComponent {
  routes=routes

  selectedDate:Date[]=[]
formData: any[][] = [];

addNewRow(index: number) {
  // Ensure the sub-array exists
  if (!this.formData[index]) {
    this.formData[index] = [];
  }

  this.formData[index].push({ index });
}

removeRow(groupIndex: number, itemIndex: number) {
  if (this.formData[groupIndex]) {
    this.formData[groupIndex].splice(itemIndex, 1);
  }
}

trackByIndex(index: number, item: any) {
  return index;
}
}
