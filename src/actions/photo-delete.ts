"use server";

import { PHOTO_DELETE, PHOTO_POST } from "@/functions/api";
import apiError from "@/functions/api-error";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function photoDelete(id: string) {
  const token = cookies().get("token")?.value;

  try {
    if (!token) throw new Error("Token invalido");
    const { url } = PHOTO_DELETE(id);
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!response.ok) throw new Error("Erro ao deletar a foto");
  } catch (err: unknown) {
    return apiError(err);
  }
  revalidateTag("photos");
  redirect("/conta");
}
