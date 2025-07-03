import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClearCacheSettingsComponent } from './clear-cache-settings.component';

const routes: Routes = [{ path: '', component: ClearCacheSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClearCacheSettingsRoutingModule { }
