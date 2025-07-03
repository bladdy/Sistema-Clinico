import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignaturesSettingsComponent } from './signatures-settings.component';

const routes: Routes = [{ path: '', component: SignaturesSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignaturesSettingsRoutingModule { }
