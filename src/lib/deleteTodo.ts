"use server";

import { revalidatePath } from "next/cache";

export async function deleteTodo(id: number) {
  const res = await fetch(
    `https://todos-api-rahman.fly.dev/api/v1/todos/${id}`,
    {
      method: "DELETE",
    },
  );
  if (res.ok) {
    revalidatePath("/");
    revalidatePath("/completed");
  }
}
