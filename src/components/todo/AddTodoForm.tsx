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
import { submitTodo } from "@/lib/submitTodo";
import { useFormStatus } from "react-dom";
import { Dispatch, SetStateAction } from "react";
import { DatePicker } from "./DatePicker";
import { useToast } from "../ui/use-toast";
import { submitSubTodo } from "@/lib/submitSubTodo";

const addTodoSchema = z.object({
  deadline: z.date().nullable(),
  task: z.string().min(6),
});

export type AddTodo = z.infer<typeof addTodoSchema>;

export function AddTodoForm({
  setOpen,
  parentID,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  parentID?: number;
}) {
  const { pending } = useFormStatus();
  const form = useForm<AddTodo>({
    resolver: zodResolver(addTodoSchema),
    defaultValues: {
      task: "",
      deadline: null,
    },
  });
  const { toast } = useToast();

  async function onSubmit(values: AddTodo) {
    parentID ? await submitSubTodo(values, parentID) : await submitTodo(values);
    setOpen(false);
    toast({ title: parentID ? "Sub todo was added" : "Todo was added" });
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
