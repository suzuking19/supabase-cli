"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function signOutAction() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("サインアウトエラー:", error);
    return;
  }

  // サインアウト後にホームページにリダイレクト
  redirect("/");
}
