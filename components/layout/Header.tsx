"use client";
import React from "react";
import { NavigationMenuDemo } from "./menu";
import AcceLogo from "../icons/AcceIcons";
import { MobileNavigation } from "../ui/MobileNavigation";
import Link from "next/link";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full bg-gradient-to-r from-[#fac61b] py-8 from-10% via-[#f39f20] via-30% to-[#f38120] to-90% ">
      <div className=" px-4 lg:w-[80%] mx-auto flex items-center justify-between ">
        <div className="">
          <Link href={"/"}>
            <AcceLogo className="h-16 w-16 lg:h-32 lg:w-32 cursor-pointer" />
          </Link>
        </div>
        <div className="hidden lg:inline-flex">
          <NavigationMenuDemo />
        </div>
        <div className=" cursor-pointer  lg:hidden">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
