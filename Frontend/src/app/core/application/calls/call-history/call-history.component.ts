import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';


@Component({
  selector: 'app-call-history',
  standalone: false,
  templateUrl: './call-history.component.html',
  styleUrl: './call-history.component.scss'
})
export class CallHistoryComponent {
routes=routes
}
