import { fetchWithZod } from "@/lib/utils";
import { z } from "zod";
import { TodosRenderer } from "./TodosRenderer";

export const todoSchema = z.object({
  data: z.array(
    z.object({
      deadline: z
        .string()
        .datetime()
        .nullable()
        .transform((deadline) => (deadline ? new Date(deadline) : null)),
      todoParent: z.number().nullable(),
      task: z.string().min(5),
      children: z
        .array(
          z.object({
            deadline: z
              .string()
              .datetime()
              .nullable()
              .transform((deadline) => (deadline ? new Date(deadline) : null)),
            todoParent: z.number().nullable(),
            task: z.string().min(5),
            isCompleted: z.boolean(),
            id: z.number(),
          }),
        )
        .nullable(),
      isCompleted: z.boolean(),
      id: z.number(),
    }),
  ),
});

export type Todo = z.infer<typeof todoSchema>["data"][0];

export default async function Todos() {
  const res = fetchWithZod(todoSchema, "http://127.0.0.1:4444/api/v1/todos");
  const todos = await res;
  return <TodosRenderer todos={todos.data} />;
}
