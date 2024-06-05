import { Progress } from "@/components/ui/progress";
import { Todo } from "./Todos";
import { CardContent } from "../ui/card";

export function TodoProgreess({ subTodos }: { subTodos?: Todo[] }) {
  if (!subTodos || subTodos.length === 0) {
    return null;
  }
  const total = subTodos.length;
  const completed = subTodos.reduce(
    (prev, curr) => (curr.isCompleted ? prev + 1 : prev),
    0,
  );
  const percentage = (completed / total) * 100;
  return (
    <CardContent>
      <div className="flex flex-col items-center gap-y-2">
        <p>
          {percentage === 100
            ? "Sub todos were completed"
            : `${completed} / ${total} todos were done`}
        </p>
        <Progress value={percentage} />
      </div>
    </CardContent>
  );
}
