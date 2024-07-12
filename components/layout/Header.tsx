"use client";
import Navigation from "@/components/layout/NavigationMenu";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import AcceLogo from "../icons/AcceIcons";
import Hamburger from "./Hamburger";
import { NavigationMenuDemo } from "./menu";

const Header = () => {
  const [bar, setbar] = useState<boolean>(false);
  return (
    <>
      <AnimatePresence>
        {bar && <Navigation hideModalHandler={setbar} barstate={bar} />}
      </AnimatePresence>
      <header className="w-full bg-[#fac61b]  lg:bg-gradient-to-r from-[#fac61b] fixed z-[5000000000000000000000]  from-10% via-[#f39f20] via-30% to-[#f38120] to-90% ">
        <div className="flex items-center justify-between px-4 mx-auto max-lg:px-4 xl:w-4/5">
          <div className="">
            <Link href={"/"} className="">
              <AcceLogo className="w-20 h-20 cursor-pointer lg:h-28 lg:w-28" />
            </Link>
          </div>
          <div className="hidden xl:inline-flex z-[3000]">
            <NavigationMenuDemo />
          </div>

          <div className="mt-5  lg:hidden inline-flex z-[30000000]">
            <Hamburger
              barstate={bar}
              barfunction={setbar}
              className={`z-[800000000000] fixed`}
            />
          </div>
          {/* <div className="cursor-pointer  xl:hidden">
            <MobileNavigation />
          </div> */}
        </div>
      </header>
    </>
  );
};

export default Header;
