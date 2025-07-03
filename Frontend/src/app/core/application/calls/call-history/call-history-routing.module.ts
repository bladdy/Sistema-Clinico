import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallHistoryComponent } from './call-history.component';

const routes: Routes = [{ path: '', component: CallHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallHistoryRoutingModule { }
