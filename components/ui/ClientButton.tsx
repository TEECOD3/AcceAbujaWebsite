"use client";
import { ReactNode } from "react";
import { Button } from "./button";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  className: string;
  children: ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
};

const ClientButton = ({ href, children, className, variant }: Props) => {
  return (
    <Button asChild className={cn(`${className}`)} variant={variant}>
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default ClientButton;
