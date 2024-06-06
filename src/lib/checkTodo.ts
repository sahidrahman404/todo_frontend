"use server";

import { revalidatePath } from "next/cache";

export async function checkTodo(isCompleted: boolean, id: number) {
  const res = await fetch(
    `https://todos-api-rahman.fly.dev/api/v1/todos/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted: isCompleted }),
    },
  );
  if (res.ok) {
    revalidatePath("/");
    revalidatePath("/completed");
  }
}
