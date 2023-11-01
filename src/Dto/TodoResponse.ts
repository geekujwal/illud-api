export interface TodoResponse {
  id: number;
  title: string;
  status: boolean;
}

export interface CreateTodoResponse {
  id: string;
}

export interface CreateTodo {
  title: string;
  status: boolean;
}
