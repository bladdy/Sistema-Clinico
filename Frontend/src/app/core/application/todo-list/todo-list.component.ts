import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';


@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
routes=routes
}
