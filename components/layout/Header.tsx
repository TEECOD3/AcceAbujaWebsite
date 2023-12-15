"use client";
import Image from "next/image";
import React from "react";
import image from "../../public/acceIcon.svg";
import { NavigationMenuDemo } from "./menu";
import Hamburger from "../icons/Hamburger";
import AcceLogo from "../icons/AcceIcons";
import { MobileNavigation } from "../ui/MobileNavigation";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="h-32 w-full bg-gradient-to-r from-[#fac61b] py-8 from-10% via-[#f39f20] via-30% to-[#f38120] to-90% ">
      <div className=" px-4 lg:w-[80%] mx-auto flex items-center justify-between ">
        <div className="">
          <AcceLogo className="h-16 w-16 lg:h-32 lg:w-32" />
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
