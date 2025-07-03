import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceTemplatesSettingsComponent } from './invoice-templates-settings.component';

const routes: Routes = [{ path: '', component: InvoiceTemplatesSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceTemplatesSettingsRoutingModule { }
