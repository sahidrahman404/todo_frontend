"use client";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { checkTodo } from "@/lib/checkTodo";
import { Todo } from "./Todos";
import { useToast } from "../ui/use-toast";

export function TodoCheckbox({
  isCompleted,
  className,
  id,
  subTodos,
}: {
  isCompleted: boolean;
  className?: string;
  id: number;
  subTodos?: Todo[];
}) {
  const { toast } = useToast();
  const [completed, setCompleted] = useState(() => isCompleted);
  const disable = subTodos
    ? subTodos.find((subTodo) => subTodo.isCompleted === false)
      ? true
      : false
    : false;
  return (
    <Checkbox
      className={className}
      checked={completed}
      onCheckedChange={async (checked) => {
        if (disable) {
          toast({
            title: "The sub todo should be completed before the main todo",
          });
          return;
        }
        if (typeof checked === "boolean") {
          await checkTodo(checked, id);
          setCompleted(checked);
        }
      }}
    />
  );
}
