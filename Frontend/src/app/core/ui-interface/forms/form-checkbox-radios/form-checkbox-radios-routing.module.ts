import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormCheckboxRadiosComponent } from './form-checkbox-radios.component';

const routes: Routes = [{ path: '', component: FormCheckboxRadiosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormCheckboxRadiosRoutingModule { }
