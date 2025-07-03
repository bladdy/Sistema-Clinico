import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailTemplatesSettingsComponent } from './email-templates-settings.component';

const routes: Routes = [{ path: '', component: EmailTemplatesSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailTemplatesSettingsRoutingModule { }
