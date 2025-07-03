import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailReplyComponent } from './email-reply.component';

const routes: Routes = [{ path: '', component: EmailReplyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailReplyRoutingModule { }
