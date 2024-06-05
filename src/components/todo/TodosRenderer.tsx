import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Todo } from "@/components/todo/Todos";
import { DeleteTodo } from "./DeleteTodo";
import { AddTodo } from "./AddTodo";
import { TodoProgreess } from "./TodoProgress";

export function TodosRenderer({ todos }: { todos: Todo[] }) {
  return (
    <ol className="space-y-4">
      {todos.map((todo) => {
        if (todo.todoParent && todo.isCompleted) {
          return null;
        }
        return (
          <li className="space-y-2" key={todo.id}>
            <Card>
              <CardHeader>
                <CardTitle>{todo.task}</CardTitle>
                <CardDescription>
                  Deadline: {todo.deadline?.toLocaleString()}
                </CardDescription>
              </CardHeader>
              {todo.todoParent === null && (
                <TodoProgreess subTodos={todo.children} />
              )}
              <CardFooter className="gap-x-2">
                <DeleteTodo classname="ml-auto" id={todo.id} />
                {todo.todoParent === null && <AddTodo parentID={todo.id} />}
              </CardFooter>
            </Card>
            <div className="ml-8">
              {todo.children && <TodosRenderer todos={todo.children} />}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
