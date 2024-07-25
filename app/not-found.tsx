import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

type Props = {};

const NotFoundPage = (props: Props) => {
  return (
    <div className="min-h-screen text-orange h-screen w-screen flex items-center justify-center text-center">
      <div className="">
        <span className=" text-xl lg:text-3xl text-bold">
          Requested page not Found
        </span>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "default" }),
            "bg-orange-600 text-white"
          )}
        >
          Go back to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
