"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formSchema } from "@/lib/formSchema";
import { toast } from "sonner";

export function LandingPageForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success(`Thank you for joining the waitlist with ${values.email}`);
    form.reset();
  }
  return (
    <Form {...form}>
      <div className="flex justify-center z-10">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 md:space-y-5 w-[17rem] md:w-[18rem]"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="relative flex items-center">
                    <svg
                      className="absolute left-4"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.749959 0.75H11.25C11.5721 0.75 11.8333 1.01117 11.8333 1.33333V10.6667C11.8333 10.9888 11.5721 11.25 11.25 11.25H0.749959C0.427796 11.25 0.166626 10.9888 0.166626 10.6667V1.33333C0.166626 1.01117 0.427796 0.75 0.749959 0.75ZM10.6666 3.22212L6.04184 7.36383L1.33329 3.2093V10.0833H10.6666V3.22212ZM1.63164 1.91667L6.03607 5.80283L10.3755 1.91667H1.63164Z"
                        fill="#EDEEF0"
                      />
                    </svg>
                    <Input
                      placeholder="Email"
                      {...field}
                      className="border border-stone-700 pl-8 placeholder:font-light placeholder:text-stone-200 text-xs bg-customGray"
                    />
                  </div>
                </FormControl>

                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />
          <Button
            className="bg-stone-100 text-black text-sm w-full hover:bg-gray-200 font-light"
            type="submit"
            size={"sm"}
          >
            Join the waitlist
            <svg
              className="h-3 w-3 ml-2"
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.29587 4.99924L0.583374 1.28674L1.64387 0.226238L6.41687 4.99924L1.64387 9.77224L0.583374 8.71174L4.29587 4.99924Z"
                fill="#808080"
              />
            </svg>
          </Button>
        </form>
      </div>
    </Form>
  );
}
