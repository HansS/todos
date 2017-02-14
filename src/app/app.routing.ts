import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';

import {Routes} from '@angular/router';

export const appRoutes: Routes = [
    {path:'home', component: HomeComponent},
    {path: 'todos',component: TodosComponent}

]