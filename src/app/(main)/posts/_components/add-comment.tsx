"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useTransition } from "react";
import { AddCommentAction } from "../_actions/add-comment";

import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface AddCommentFormProps {
  post: string;
}

const formSchema = z.object({
  body: z.string().min(2).max(50),
});

export const AddCommentForm = ({ post }: AddCommentFormProps) => {
  const [isPending, startTransition] = useTransition();

  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      body: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    startTransition(() => {
      AddCommentAction({ body: values.body, post })
        .then((data) => {
          if (data?.error) {
            toast({
              variant: "destructive",
              description: data.error,
            });
          }

          if (data?.success) toast({ description: data.success });

          form.reset();
        })
        .catch(() =>
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          })
        );
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  disabled={isPending}
                  autoComplete="off"
                  spellCheck="false"
                  placeholder="Your comment here..."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div
          className={
            !form.getValues().body ? "hidden" : "flex justify-end gap-2"
          }
        >
          <Button
            disabled={isPending}
            onClick={() => form.reset()}
            variant="outline"
            size="sm"
          >
            Cancel
          </Button>
          <Button disabled={isPending} type="submit" size="sm">
            Comment
          </Button>
        </div>
      </form>
    </Form>
  );
};
