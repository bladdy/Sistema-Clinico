import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-roles-and-permissions',
  standalone: false,
  templateUrl: './roles-and-permissions.component.html',
  styleUrl: './roles-and-permissions.component.scss'
})
export class RolesAndPermissionsComponent {
routes=routes
}
