import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HorizontalFormComponent } from './horizontal-form.component';

const routes: Routes = [{ path: '', component: HorizontalFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorizontalFormRoutingModule { }
