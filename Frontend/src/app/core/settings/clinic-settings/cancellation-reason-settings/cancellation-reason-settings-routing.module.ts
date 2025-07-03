import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancellationReasonSettingsComponent } from './cancellation-reason-settings.component';

const routes: Routes = [{ path: '', component: CancellationReasonSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CancellationReasonSettingsRoutingModule { }
