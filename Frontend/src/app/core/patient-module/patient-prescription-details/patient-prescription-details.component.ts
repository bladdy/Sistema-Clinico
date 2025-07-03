import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-patient-prescription-details',
  standalone: false,
  templateUrl: './patient-prescription-details.component.html',
  styleUrl: './patient-prescription-details.component.scss'
})
export class PatientPrescriptionDetailsComponent {
routes=routes
}
