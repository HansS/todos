import { TodoService } from './todo.service';
import { TodosComponent } from './todos.component';
import { todoRoutes } from './todos.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoCreateComponent } from './todo-create/todo-create.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(todoRoutes)
  ],
  declarations: [TodosComponent,TodoListComponent, TodoDetailsComponent, TodoCreateComponent],
  exports: [RouterModule,TodosComponent],
  providers: [TodoService]
})
export class TodosModule { }
