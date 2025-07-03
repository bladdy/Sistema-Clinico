import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineConsultationsComponent } from './online-consultations.component';

const routes: Routes = [{ path: '', component: OnlineConsultationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlineConsultationsRoutingModule { }
