import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-doctor-grid',
  standalone: false,
  templateUrl: './doctor-grid.component.html',
  styleUrl: './doctor-grid.component.scss'
})
export class DoctorGridComponent {
routes=routes
}
