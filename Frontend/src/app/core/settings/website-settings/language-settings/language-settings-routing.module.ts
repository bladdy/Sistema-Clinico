import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageSettingsComponent } from './language-settings.component';

const routes: Routes = [{ path: '', component: LanguageSettingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LanguageSettingsRoutingModule { }
