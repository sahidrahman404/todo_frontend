import { fetchWithZod } from "@/lib/utils";
import { todoSchema } from "./Todos";
import { TodosCompletedRenderer } from "./TodosCompletedRenderer";

export default async function TodosCompleted() {
  const res = fetchWithZod(
    todoSchema,
    "https://todos-api-rahman.fly.dev/api/v1/todos?show_completed=true",
  );
  const todos = await res;
  return <TodosCompletedRenderer todos={todos.data} />;
}
