import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-edit-invoices',
  standalone: false,
  templateUrl: './edit-invoices.component.html',
  styleUrl: './edit-invoices.component.scss'
})
export class EditInvoicesComponent {
routes=routes
}
