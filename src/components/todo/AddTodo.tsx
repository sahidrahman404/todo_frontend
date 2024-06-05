"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AddTodoForm } from "./AddTodoForm";
import { useState } from "react";

export function AddTodo({
  classname,
  parentID,
}: {
  classname?: string;
  parentID?: number;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className={classname}>
          {parentID ? "Add Sub Todo" : "Add Todo"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{parentID ? "Add Sub Todo" : "Add Todo"}</DialogTitle>
        </DialogHeader>
        <AddTodoForm setOpen={setOpen} parentID={parentID} />
      </DialogContent>
    </Dialog>
  );
}
