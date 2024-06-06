"use server";

import { AddTodo } from "@/components/todo/AddTodoForm";
import { revalidatePath } from "next/cache";

export async function submitTodo(data: AddTodo) {
  const res = await fetch("http://127.0.0.1:4444/api/v1/todos", {
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
