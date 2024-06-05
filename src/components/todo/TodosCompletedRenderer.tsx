import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Todo } from "@/components/todo/Todos";
import { UpdateTodoCheckbox } from "./UpdateTodoCheckbox";

export function TodosCompletedRenderer({ todos }: { todos: Todo[] }) {
  return (
    <ol className="space-y-4">
      {todos.map((todo) => {
        return (
          <li className="space-y-2" key={todo.id}>
            <Card>
              <CardHeader className="flex flex-row">
                <div className="space-y-2">
                  <CardTitle>{todo.task}</CardTitle>
                  <CardDescription>
                    Deadline: {todo.deadline?.toLocaleString()}
                  </CardDescription>
                </div>
                <UpdateTodoCheckbox
                  isCompleted={todo.isCompleted}
                  className="ml-auto"
                  id={todo.id}
                  //@ts-ignore
                  subTodos={todo.children}
                />
              </CardHeader>
            </Card>
            <div className="ml-8">
              {todo.children && (
                <TodosCompletedRenderer
                  //@ts-ignore
                  todos={todo.children}
                />
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
