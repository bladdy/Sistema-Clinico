import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-add-invoices',
  standalone: false,
  templateUrl: './add-invoices.component.html',
  styleUrl: './add-invoices.component.scss'
})
export class AddInvoicesComponent {
routes=routes
}
