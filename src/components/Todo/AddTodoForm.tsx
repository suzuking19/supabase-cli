import { addTodo } from "./actions";

export default function AddTodoForm() {
  return (
    <form action={addTodo} className="mb-6">
      <div className="flex gap-3">
        <input
          type="text"
          name="title"
          placeholder="新しいTodoを入力..."
          className="flex-1 px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-300 transition-all font-light text-gray-700 placeholder-gray-400"
          required
        />
        <button
          type="submit"
          className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 font-light shadow-sm hover:shadow-md"
        >
          追加
        </button>
      </div>
    </form>
  );
}
