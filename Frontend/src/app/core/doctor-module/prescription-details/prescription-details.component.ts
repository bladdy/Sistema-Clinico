import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-prescription-details',
  standalone: false,
  templateUrl: './prescription-details.component.html',
  styleUrl: './prescription-details.component.scss'
})
export class PrescriptionDetailsComponent {
routes=routes
}
