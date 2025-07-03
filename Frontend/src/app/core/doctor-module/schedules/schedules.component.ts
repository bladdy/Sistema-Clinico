import { Component } from '@angular/core';

@Component({
  selector: 'app-schedules',
  standalone: false,
  templateUrl: './schedules.component.html',
  styleUrl: './schedules.component.scss'
})
export class SchedulesComponent {
  addtime: Date | undefined;
  addtime2: Date | undefined;
  selectedDates: Date[] = [];
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
