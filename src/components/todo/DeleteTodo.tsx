"use client";

import { deleteTodo } from "@/lib/deleteTodo";
import { Button } from "@/components/ui/button";
import { useToast } from "../ui/use-toast";

export function DeleteTodo({
  id,
  classname,
}: {
  id: number;
  classname?: string;
}) {
  const { toast } = useToast();
  return (
    <Button
      className={classname}
      variant="destructive"
      onClick={async () => {
        toast({ title: "Todo was deleted" });
        await deleteTodo(id);
      }}
    >
      Delete Todo
    </Button>
  );
}
