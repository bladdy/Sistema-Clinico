import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-patient-invoice-details',
  standalone: false,
  templateUrl: './patient-invoice-details.component.html',
  styleUrl: './patient-invoice-details.component.scss'
})
export class PatientInvoiceDetailsComponent {
routes=routes
}
