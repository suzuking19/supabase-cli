import { createClient } from "@/utils/supabase/server";
import SigninForm from "@/components/SigninForm/SigninForm";
import SignoutForm from "@/components/SignoutForm";
import { TodoSection } from "@/components/Todo";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-8">
      <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm max-w-md w-full">
        <h1 className="text-2xl font-light text-gray-800 text-center mb-8 tracking-wide">
          Supabase CLI Playground
        </h1>

        {user ? (
          <div className="text-center">
            <p className="text-gray-500 mb-6 font-light">
              ようこそ、{user.email}さん
            </p>
            <SignoutForm />
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-500 mb-6 font-light">
              サインインしてください
            </p>
            <SigninForm />
          </div>
        )}
      </div>

      {user && <TodoSection />}
    </div>
  );
}
