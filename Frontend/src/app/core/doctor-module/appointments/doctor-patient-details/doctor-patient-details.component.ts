import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-doctor-patient-details',
  standalone: false,
  templateUrl: './doctor-patient-details.component.html',
  styleUrl: './doctor-patient-details.component.scss'
})
export class DoctorPatientDetailsComponent {
routes=routes
}
