import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormGridGuttersComponent } from './form-grid-gutters.component';

const routes: Routes = [{ path: '', component: FormGridGuttersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormGridGuttersRoutingModule { }
