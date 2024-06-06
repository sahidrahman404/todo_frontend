"use server";

import { AddTodo } from "@/components/todo/AddTodoForm";
import { revalidatePath } from "next/cache";

export async function submitSubTodo(data: AddTodo, parentID: number) {
  const res = await fetch(
    "https://todos-api-rahman.fly.dev/api/v1/todos/children",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, todoParent: parentID }),
    },
  );
  if (res.ok) {
    revalidatePath("/");
    revalidatePath("/completed");
  }
}
