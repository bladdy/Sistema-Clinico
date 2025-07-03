import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';


@Component({
  selector: 'app-links',
  standalone: false,
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss'
})
export class LinksComponent {
routes=routes
}
