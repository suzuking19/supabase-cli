export interface Todo {
  id: number;
  title: string;
  user_id: string;
  created_at: string;
}

export interface CreateTodoRequest {
  title: string;
}
