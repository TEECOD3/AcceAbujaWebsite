"use client";
import Image from "next/image";
import React from "react";
import image from "../../public/acceIcon.svg";
import { NavigationMenuDemo } from "./menu";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="h-32 w-full bg-gradient-to-r from-[#fac61b] from-10% via-[#f39f20] via-30% to-[#f38120] to-90% flex items-center">
      <div className=" px-4 lg:max-w-[90%] w-[80%] mx-auto flex items-center justify-between ">
        <Image height={80} width={80} src={image} alt="acce_logo" />
        <div className="hidden lg:inline-flex">
          <NavigationMenuDemo />
        </div>
      </div>
    </header>
  );
};

export default Header;
