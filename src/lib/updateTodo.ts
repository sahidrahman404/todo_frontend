"use server";

import { UpdateTodo } from "@/components/todo/UpdateTodoForm";
import { revalidatePath } from "next/cache";

export async function updateTodo(data: UpdateTodo, id: number) {
  const res = await fetch(
    `https://todos-api-rahman.fly.dev/api/v1/todos/${id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  );
  if (res.ok) {
    revalidatePath("/");
    revalidatePath("/completed");
  }
}
