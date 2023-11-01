import { Injectable } from '@nestjs/common';
import { CreateTodo, TodoResponse } from 'src/Dto/TodoResponse';

@Injectable()
export class TodoService {
  private todo: TodoResponse[] = [
    {
      id: 1,
      status: false,
      title: 'do laundry',
    },
  ];

  GetTodos(): TodoResponse[] {
    return this.todo;
  }

  GetTodo(id: number): TodoResponse {
    const getTodo = this.todo.filter((todo) => todo.id == id);
    return getTodo[0];
  }

  DeleteTodo(id: number) {
    const newTodo = this.todo.filter((todo) => todo.id != id);
    this.todo = newTodo;
  }

  PostTodo(createTodo: CreateTodo): number {
    const getLastElement = this.todo[this.todo.length - 1];
    const newTodo: TodoResponse = {
      id: getLastElement.id ? getLastElement.id + 1 : 1,
      status: createTodo.status,
      title: createTodo.title,
    };
    this.todo.push(newTodo);
    return newTodo.id;
  }
}
