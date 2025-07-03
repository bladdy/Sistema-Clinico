import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-outgoing-call',
  standalone: false,
  templateUrl: './outgoing-call.component.html',
  styleUrl: './outgoing-call.component.scss'
})
export class OutgoingCallComponent {
routes=routes
}
