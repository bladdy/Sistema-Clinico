import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomFieldsSettingsComponent } from './custom-fields-settings.component';

const routes: Routes = [{ path: '', component: CustomFieldsSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomFieldsSettingsRoutingModule { }
