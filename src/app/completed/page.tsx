import { CompletedTodoHeader } from "@/components/todo/CompletedTodoHeader";
import TodosCompleted from "@/components/todo/TodosCompleted";

export default async function Completed() {
  return (
    <main className="mt-5 space-y-8 sm:w-full md:w-[500px] mx-auto">
      <CompletedTodoHeader />
      <TodosCompleted />
    </main>
  );
}
