import { Component } from '@angular/core';
interface data {
    value: string;
  }
@Component({
    selector: 'app-basic-inputs',
    templateUrl: './basic-inputs.component.html',
    styleUrls: ['./basic-inputs.component.scss'],
    standalone: false
})
export class BasicInputsComponent{
    public selectedValue = '';
    selectedList: data[] = [
      { value: '-- Select --' },
      { value: 'Option 1' },
      { value: 'Option 2' },
      { value: 'Option 3' },
      { value: 'Option 4' },
      { value: 'Option 5' },
    ];

}
