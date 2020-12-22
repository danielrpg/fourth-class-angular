import { Injectable } from '@angular/core';
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: Todo[] = [];
  constructor() { }

  /**
   *    public id: number,
        public title: string,
        public date: Date,
        public description: string,
        public status: boolean
   */
  getAllTodos(): Todo[] {
    let todoListData: Todo[] = [
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
      }
    ];

    return todoListData;
  }
}
