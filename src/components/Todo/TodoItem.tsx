import { Todo } from "@/types/todo";
import { deleteTodo } from "./actions";

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors">
      <span className="flex-1 text-gray-700 font-light">{todo.title}</span>
      <form action={deleteTodo}>
        <input type="hidden" name="id" value={todo.id} />
        <button
          type="submit"
          className="text-gray-400 hover:text-gray-600 transition-colors px-2 py-1 rounded font-light"
          title="削除"
        >
          ✕
        </button>
      </form>
    </div>
  );
}
