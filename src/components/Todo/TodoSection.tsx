import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import { getTodos } from "./actions";

export default async function TodoSection() {
  const todos = await getTodos();

  return (
    <div className="mt-12 w-full max-w-2xl">
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
        <h2 className="text-xl font-light text-gray-700 mb-6 tracking-wide">
          Todo リスト
        </h2>
        <AddTodoForm />
        <TodoList todos={todos} />
      </div>
    </div>
  );
}
