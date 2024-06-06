"use server";

import { AddTodo } from "@/components/todo/AddTodoForm";
import { revalidatePath } from "next/cache";

export async function submitTodo(data: AddTodo) {
  const res = await fetch("https://todos-api-rahman.fly.dev/api/v1/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    revalidatePath("/");
    revalidatePath("/completed");
  }
}
