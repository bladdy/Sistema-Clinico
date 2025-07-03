import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesDetailsComponent } from './invoices-details.component';

const routes: Routes = [{ path: '', component: InvoicesDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoicesDetailsRoutingModule { }
