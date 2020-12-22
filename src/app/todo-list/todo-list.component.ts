import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/Todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  title: string;
  todos: Todo[] = [];  

  constructor(private todoService: TodoService) { 
    console.info(`constructor`);
  }

  ngOnInit(): void {
    this.title = `Todo List`;
    console.warn(`This is on init error`);
    this.loadAllTodoList();
  }

  loadAllTodoList(): void {
    this.todos = this.todoService.getAllTodos();
    console.info(this.todos);
  }

}
