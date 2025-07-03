import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutgoingCallComponent } from './outgoing-call.component';

const routes: Routes = [{ path: '', component: OutgoingCallComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutgoingCallRoutingModule { }
