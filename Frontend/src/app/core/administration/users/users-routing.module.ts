import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '',
    component: UsersComponent,
    children:[
      
  { path: 'roles-and-permissions', loadChildren: () => import('./roles-and-permissions/roles-and-permissions.module').then(m => m.RolesAndPermissionsModule) },
  { path: 'permission', loadChildren: () => import('./permission/permission.module').then(m => m.PermissionModule) },
  { path: 'delete-account-request', loadChildren: () => import('./delete-account-request/delete-account-request.module').then(m => m.DeleteAccountRequestModule) },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
