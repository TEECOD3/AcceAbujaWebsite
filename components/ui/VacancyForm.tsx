"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
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
import { Textarea } from "./textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import Link from "next/link";

const formSchema = z.object({
  fullname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "fullname must be at least 2 characters.",
  }),
  positionapplied: z.string().min(2, {
    message: "surname must be at least 2 characters.",
  }),
  proposal: z.string().min(2, {
    message: " message must be at least 10 characters.",
  }),
});

export function VacancyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      positionapplied: "",
      proposal: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  // ...

  return (
    <div className="w-full lg:w-[67%] mx-auto ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Full Name"
                    {...field}
                    className="bg-white"
                  />
                </FormControl>

                <FormMessage className="h-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="surName"
                    {...field}
                    className="bg-white"
                  />
                </FormControl>

                <FormMessage className="h-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="positionapplied"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Enter position applied for" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Teacher">Teacher</SelectItem>
                    <SelectItem value="Class teacher">Class teacher</SelectItem>
                    <SelectItem value="Developer">Developer</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="proposal"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="proposal"
                    {...field}
                    className="bg-white"
                  />
                </FormControl>

                <FormMessage className="h-1" />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-orange-400 rounded-none">
            Send message
          </Button>
        </form>
      </Form>
    </div>
  );
}
