import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-payroll-2',
  standalone: false,
  templateUrl: './payroll-2.component.html',
  styleUrl: './payroll-2.component.scss'
})
export class Payroll2Component {
routes=routes
}
