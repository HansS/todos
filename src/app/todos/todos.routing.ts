import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodosComponent } from './todos.component';
import {Routes} from '@angular/router';

export const todoRoutes: Routes = [
    {path:'todos',
    component: TodosComponent,
    children: [
        {path:'list',component: TodoListComponent},
        {path:':id',component:TodoDetailsComponent}
    ]
}
]