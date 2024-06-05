import { fetchWithZod } from "@/lib/utils";
import { todoSchema } from "./Todos";
import { TodosCompletedRenderer } from "./TodosCompletedRenderer";

export default async function TodosCompleted() {
  const res = fetchWithZod(
    todoSchema,
    "http://127.0.0.1:4444/api/v1/todos?show_completed=true",
  );
  const todos = await res;
  return <TodosCompletedRenderer todos={todos.data} />;
}
