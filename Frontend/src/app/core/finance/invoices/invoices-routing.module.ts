import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from './invoices.component';

const routes: Routes = [{
  path: '', component: InvoicesComponent,
  children: [
    { path: 'invoices-list', loadChildren: () => import('./invoices-list/invoices-list.module').then(m => m.InvoicesListModule), },
    { path: 'add-invoices', loadChildren: () => import('./add-invoices/add-invoices.module').then(m => m.AddInvoicesModule) },
    { path: 'edit-invoices', loadChildren: () => import('./edit-invoices/edit-invoices.module').then(m => m.EditInvoicesModule) },
    { path: 'invoices-details', loadChildren: () => import('./invoices-details/invoices-details.module').then(m => m.InvoicesDetailsModule) },
  ]
},
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesRoutingModule { }
