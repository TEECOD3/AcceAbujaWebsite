"use client";
import React from "react";
import { NavigationMenuDemo } from "./menu";
import AcceLogo from "../icons/AcceIcons";
import { MobileNavigation } from "../ui/MobileNavigation";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-[#fac61b]  from-10% via-[#f39f20] via-30% to-[#f38120] to-90% ">
      <div className="flex items-center justify-between px-4 mx-auto  xl:w-4/5">
        <div className="">
          <Link href={"/"} className="">
            <AcceLogo className="w-20 h-20 cursor-pointer lg:h-32 lg:w-32" />
          </Link>
        </div>
        <div className="hidden xl:inline-flex">
          <NavigationMenuDemo />
        </div>
        <div className="cursor-pointer  xl:hidden">
          <MobileNavigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
