import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeavesComponent } from './leaves.component';

const routes: Routes = [{ path: '', component: LeavesComponent,
  children:[
     { path: 'leaves-list', loadChildren: () => import('./leaves-list/leaves-list.module').then(m => m.LeavesListModule) },
    { path: 'leave-type', loadChildren: () => import('./leave-type/leave-type.module').then(m => m.LeaveTypeModule) }
  ]
 },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeavesRoutingModule { }
