"use server";

import { AddTodo } from "@/components/todo/AddTodoForm";
import { revalidatePath } from "next/cache";

export async function submitSubTodo(data: AddTodo, parentID: number) {
  const res = await fetch("http://127.0.0.1:4444/api/v1/todos/children", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data, todoParent: parentID }),
  });
  if (res.ok) {
    revalidatePath("/");
    revalidatePath("/completed");
  }
}
