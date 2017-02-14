import { Todo } from './../todo-details/todo.model';
import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs/Observable';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos:Observable<Todo[]>;
  constructor(private service:TodoService) { }

  ngOnInit() {
   this.todos = this.service.getTodos();
  }

}
