"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { UpdateTodoForm } from "./UpdateTodoForm";
import { Todo } from "./Todos";

export function UpdateTodo({
  classname,
  todo,
  id,
}: {
  classname?: string;
  todo: Todo;
  id: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={classname} variant="outline">
          Update
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Update Todo</DialogTitle>
        </DialogHeader>
        <UpdateTodoForm setOpen={setOpen} id={id} todo={todo} />
      </DialogContent>
    </Dialog>
  );
}
