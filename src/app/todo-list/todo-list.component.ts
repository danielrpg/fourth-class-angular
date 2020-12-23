import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private todoService: TodoService, private router: Router) { 
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

  onClickDetail(id: number) {
    this.router.navigate(['todo', id, 'detail']);
  } 
}
