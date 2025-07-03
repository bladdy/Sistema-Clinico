import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemUpdateComponent } from './system-update.component';

const routes: Routes = [{ path: '', component: SystemUpdateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemUpdateRoutingModule { }
