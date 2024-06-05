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
import { TodoCheckbox } from "./TodoCheckbox";
import { UpdateTodo } from "./UpdateTodo";
import { isDateAlmostDue } from "@/lib/utils";

export function TodosRenderer({ todos }: { todos: Todo[] }) {
  return (
    <ol className="space-y-4">
      {todos.map((todo) => {
        if (
          todo.todoParent === null &&
          todo.children === null &&
          todo.isCompleted === true
        ) {
          return null;
        }
        if (
          todo.todoParent === null &&
          todo.isCompleted === true &&
          todo.children &&
          !todo.children.find((todo) => todo.isCompleted === false)
        ) {
          return null;
        }
        if (todo.todoParent && todo.isCompleted) {
          return null;
        }
        return (
          <li className="space-y-2" key={todo.id}>
            <Card>
              <CardHeader className="flex flex-row">
                <div className="space-y-2">
                  <CardTitle>{todo.task}</CardTitle>
                  <CardDescription>
                    Deadline: {todo.deadline?.toLocaleString()}
                    {todo.deadline && (
                      <span className="ml-2 text-red-500 text-sm">
                        {isDateAlmostDue(todo.deadline) &&
                          "Deadline is almost due"}
                      </span>
                    )}
                  </CardDescription>
                </div>
                <TodoCheckbox
                  isCompleted={todo.isCompleted}
                  className="ml-auto"
                  id={todo.id}
                  //@ts-ignore
                  subTodos={todo.children}
                />
              </CardHeader>
              {todo.todoParent === null && (
                //@ts-ignore
                <TodoProgreess subTodos={todo.children} />
              )}
              <CardFooter className="gap-x-2">
                <UpdateTodo id={todo.id} todo={todo} />
                <DeleteTodo classname="ml-auto" id={todo.id} />
                {todo.todoParent === null && <AddTodo parentID={todo.id} />}
              </CardFooter>
            </Card>
            <div className="ml-8">
              {todo.children && (
                <TodosRenderer
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
