"use server";

import { revalidatePath } from "next/cache";

export async function deleteTodo(id: number) {
  const res = await fetch(`http://127.0.0.1:4444/api/v1/todos/${id}`, {
    method: "DELETE",
  });
  if (res.ok) {
    revalidatePath("/");
    revalidatePath("/completed");
  }
}
