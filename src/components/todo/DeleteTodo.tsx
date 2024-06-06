"use client";

import { deleteTodo } from "@/lib/deleteTodo";
import { Button } from "@/components/ui/button";
import { useToast } from "../ui/use-toast";
import { useState } from "react";

export function DeleteTodo({
  id,
  classname,
}: {
  id: number;
  classname?: string;
}) {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  return (
    <Button
      className={classname}
      variant="destructive"
      disabled={loading}
      onClick={async () => {
        setLoading(true);
        toast({ title: "Todo was deleted" });
        await deleteTodo(id);
      }}
    >
      Delete Todo
    </Button>
  );
}
