import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrefixesSettingsComponent } from './prefixes-settings.component';

const routes: Routes = [{ path: '', component: PrefixesSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrefixesSettingsRoutingModule { }
