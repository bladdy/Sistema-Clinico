import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpensesComponent } from './expenses.component';

const routes: Routes = [{
  path: '',
  component: ExpensesComponent,
  children: [
    { path: 'expense-list', loadChildren: () => import('./expense-list/expense-list.module').then(m => m.ExpenseListModule) },
    { path: 'expense-category', loadChildren: () => import('./expense-category/expense-category.module').then(m => m.ExpenseCategoryModule) },
  ]
},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule { }
