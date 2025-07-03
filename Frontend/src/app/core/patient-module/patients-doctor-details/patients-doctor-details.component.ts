import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-patients-doctor-details',
  standalone: false,
  templateUrl: './patients-doctor-details.component.html',
  styleUrl: './patients-doctor-details.component.scss'
})
export class PatientsDoctorDetailsComponent {
routes=routes
}
