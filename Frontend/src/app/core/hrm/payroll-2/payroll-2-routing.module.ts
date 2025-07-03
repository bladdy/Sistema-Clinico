import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Payroll2Component } from './payroll-2.component';

const routes: Routes = [{ path: '', component: Payroll2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Payroll2RoutingModule { }
