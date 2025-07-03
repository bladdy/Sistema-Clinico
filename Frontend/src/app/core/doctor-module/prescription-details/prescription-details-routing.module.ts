import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrescriptionDetailsComponent } from './prescription-details.component';

const routes: Routes = [{ path: '', component: PrescriptionDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrescriptionDetailsRoutingModule { }
