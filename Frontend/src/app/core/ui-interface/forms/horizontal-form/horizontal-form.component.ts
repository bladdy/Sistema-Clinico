import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-horizontal-form',
  standalone: false,
  templateUrl: './horizontal-form.component.html',
  styleUrl: './horizontal-form.component.scss'
})
export class HorizontalFormComponent {
  routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';
  public selectedValue5 = '';

  selectedList1: data[] = [
    { value: 'A+' },
    { value: 'O+' },
    { value: 'B+' },
    { value: 'AB+' },
  ];
  selectedList2: data[] = [
    { value: 'Select State' },
    { value: 'California' },
    { value: 'Texas' },
    { value: 'Florida' },
  ];
  selectedList3: data[] = [
    { value: 'Select Country' },
    { value: 'USA' },
    { value: 'France' },
    { value: 'India' },
    { value: 'Spain' },
  ];
  selectedList4: data[] = [
    { value: 'Choose...' },
    { value: 'One' },
    { value: 'Two' },
    { value: 'Three' },
  ];
  selectedList5: data[] = [
    { value: 'Choose...' },
    { value: 'One' },
    { value: 'Two' },
    { value: 'Three' },
  ];
}
