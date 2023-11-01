import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTodo, TodoResponse } from 'src/Dto/TodoResponse';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private _todoService: TodoService) {}

  @Get()
  async findTodos(): Promise<TodoResponse[]> {
    return await this._todoService.GetTodos();
  }

  @Get(':id')
  async findTodo(@Param('id') id: number): Promise<TodoResponse> {
    return await this._todoService.GetTodo(id);
  }

  @Post()
  async postTodo(@Body() createTodo: CreateTodo): Promise<number> {
    return this._todoService.PostTodo(createTodo);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: number) {
    this._todoService.DeleteTodo(id);
  }
}
