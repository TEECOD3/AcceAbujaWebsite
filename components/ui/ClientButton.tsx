"use client";
import { ReactNode } from "react";
import { Button } from "./button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  className: string;
  children: ReactNode;
};

const ClientButton = ({ href, children, className }: Props) => {
  return (
    <Button asChild className={cn(`${className}`)}>
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default ClientButton;
