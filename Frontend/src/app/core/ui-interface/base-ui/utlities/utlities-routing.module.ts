import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtlitiesComponent } from './utlities.component';

const routes: Routes = [{ path: '', component: UtlitiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtlitiesRoutingModule { }
