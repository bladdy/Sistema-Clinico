import { Component } from '@angular/core';

@Component({
  selector: 'app-online-consultations',
  standalone: false,
  templateUrl: './online-consultations.component.html',
  styleUrl: './online-consultations.component.scss'
})
export class OnlineConsultationsComponent {
  trash:boolean[]=[false];
isTrash(index:number):void{
  this.trash[index]=true;
}
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
