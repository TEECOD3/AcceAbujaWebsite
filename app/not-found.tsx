import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {};

const NotFoundPage = (props: Props) => {
  return (
    <div className="min-h-screen text-orange h-screen w-screen flex  items-center justify-center text-center flex-col gap-y-4">
      <div className="">
        <span className=" text-xl lg:text-3xl font-bold capitalize animate-pulse">
          Requested page not Found
        </span>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "default" }),
            "bg-orange-600 text-white capitalize font-semibold"
          )}
        >
          Go back to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
