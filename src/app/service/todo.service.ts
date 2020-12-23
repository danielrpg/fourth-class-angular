import { Injectable } from '@angular/core';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: Todo[] = [];

  constructor() {
    this.setAllTodos();
  }

  setAllTodos(): void {
    this.todos = [
      {
        id: 1,
        title: 'Study Angular',
        date: new Date(),
        description: 'Need to study angular fundamentals',
        status: true
      },
      {
        id: 2,
        title: 'Practice Angular',
        date: new Date(),
        description: 'Need to study angular fundamentals',
        status: true
      },
      {
        id: 3,
        title: 'Study JAVA Spring Boot',
        date: new Date(),
        description: 'Need to study Spring fundamentals',
        status: true
      }
    ];
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return this.todos.find(todo => todo.id == id);
  }
}
