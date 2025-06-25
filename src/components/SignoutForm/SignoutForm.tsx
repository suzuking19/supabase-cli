import { signOutAction } from "./action";

export default function SignoutForm() {
  return (
    <form action={signOutAction}>
      <button
        type="submit"
        className="w-full bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-800 font-light py-3 px-6 rounded-lg border border-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 shadow-sm hover:shadow-md"
      >
        サインアウト
      </button>
    </form>
  );
}
