import { AddTodo } from "@/components/todo/AddTodo";
import Todos from "@/components/todo/Todos";

export default async function Home() {
  return (
    <main className="mt-5 space-y-8 sm:w-full md:w-[500px] mx-auto">
      <div className="flex justify-center">
        <AddTodo />
      </div>
      <Todos />
    </main>
  );
}
