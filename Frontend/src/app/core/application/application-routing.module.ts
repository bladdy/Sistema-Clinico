import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application.component';

const routes: Routes = [
  {
    path: '',
    component: ApplicationComponent,
    children: [
      {
        path: 'chat',
        loadChildren: () =>
          import('./chat/chat.module').then((m) => m.ChatModule),
      },

      {
        path: 'email',
        loadChildren: () =>
          import('./email/email.module').then((m) => m.EmailModule),
      },
      { path: 'email-reply', loadChildren: () => import('./email-reply/email-reply.module').then(m => m.EmailReplyModule) },
      { path: 'todo', loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule) },
      { path: 'notes', loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule) },
      { path: 'social-feed', loadChildren: () => import('./social-feed/social-feed.module').then(m => m.SocialFeedModule) },
      { path: 'file-manager', loadChildren: () => import('./file-manager/file-manager.module').then(m => m.FileManagerModule) },
      { path: 'kanban-view', loadChildren: () => import('./kanban-view/kanban-view.module').then(m => m.KanbanViewModule) },
      { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule) },
      { path: 'invoice', loadChildren: () => import('./invoice/invoice.module').then(m => m.InvoiceModule) },
      { path: 'search-list', loadChildren: () => import('./search-list/search-list.module').then(m => m.SearchListModule) },
      { path: 'todo-list', loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule) },
      { path: 'calls', loadChildren: () => import('./calls/calls.module').then(m => m.CallsModule) },
      { path: 'invoice-details', loadChildren: () => import('./invoice-details/invoice-details.module').then(m => m.InvoiceDetailsModule) },
      { path: 'calendar', loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule) },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApplicationRoutingModule {}
