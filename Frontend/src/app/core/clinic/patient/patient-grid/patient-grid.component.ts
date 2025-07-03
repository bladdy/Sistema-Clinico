import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-patient-grid',
  standalone: false,
  templateUrl: './patient-grid.component.html',
  styleUrl: './patient-grid.component.scss'
})
export class PatientGridComponent {
routes=routes
}
