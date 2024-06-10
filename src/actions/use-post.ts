"use server";

import { USER_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import login from "./login";

export default async function usePost(state: {}, formData: FormData) {
  const username = formData.get("username") as string | null;
  const email = formData.get("email") as string | null;
  const password = formData.get("password") as string | null;

  try {
    if (!username || !email || !password) throw new Error("Preencha os dados");
    if (password.length < 6) throw new Error("A senha ter mais de 6 digitos.");
    const { url } = USER_POST();
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) throw new Error("email ou usúario já cadastrado.");
    const data = await response.json();
    const { ok } = await login({ ok: true, error: "" }, formData);
    if (!ok) throw new Error("Error ao logar.");
    return { data: null, ok: true, error: "" };
  } catch (err: unknown) {
    return apiError(err);
  }
}
