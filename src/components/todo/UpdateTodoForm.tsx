import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { Dispatch, SetStateAction } from "react";
import { DatePicker } from "./DatePicker";
import { useToast } from "../ui/use-toast";
import { updateTodo } from "@/lib/updateTodo";
import { Todo } from "./Todos";

const updateTodoSchema = z.object({
  deadline: z.date().nullable(),
  task: z.string().min(6),
});

export type UpdateTodo = z.infer<typeof updateTodoSchema>;

export function UpdateTodoForm({
  setOpen,
  todo,
  id,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  todo: Todo;
  id: number;
}) {
  const { pending } = useFormStatus();
  const form = useForm<UpdateTodo>({
    resolver: zodResolver(updateTodoSchema),
    defaultValues: {
      task: todo.task,
      deadline: todo.deadline,
    },
  });
  const { toast } = useToast();

  async function onSubmit(values: UpdateTodo) {
    await updateTodo(values, id);
    setOpen(false);
    toast({ title: "Todo was updated" });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="task"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Task</FormLabel>
              <FormControl>
                <Input placeholder="Build todo website" {...field} />
              </FormControl>
              <FormDescription>Add your task in here</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deadline"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Deadline</FormLabel>
              <FormControl>
                <DatePicker date={field.value} onChange={field.onChange} />
              </FormControl>
              <FormDescription>Select the deadline date</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={pending}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
