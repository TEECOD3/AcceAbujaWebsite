"use client";
import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

const Provider = (props: Props) => {
  const { children } = props;
  return (
    <div>
      <NextUIProvider>{children} </NextUIProvider>
    </div>
  );
};

export default Provider;
