import { FC } from "react";
import Link from "next/link";
import { motion, stagger } from "framer-motion";
import Image from "next/image";
import logo from "@/public/AcceLogo.svg";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface MobileNavProps {
  hideModalHandler: (barstate: boolean) => void;
  barstate: boolean;
}

const Mobilenav: FC<MobileNavProps> = (props: MobileNavProps) => {
  const { hideModalHandler, barstate } = props;

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "circOut",
        duration: 1,
        delay: 1,
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 overflow-hidden flex flex-col items-center  text-white text-2xl lg:text-4xl  h-screen w-screen bg-white
         z-[40000000] text-center"
        variants={item}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100vh", opacity: 1 }}
        transition={{ duration: 1, staggerChildren: 0.4, ease: "circIn" }}
        exit="exit"
      >
        <div
          className={`flex justify-between bg-transparent items-center fixed z-[100]  max-lg:px-5 container max-w-7xl mx-auto w-full  px-4 h-fit py-3 transition-all duration-1000  `}
        >
          <motion.div
            className="cursor-pointer"
            initial={{ opacity: 0, rotate: 2 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            exit={{ opacity: 0, transition: { delay: 0.4 } }}
            onClick={() => {
              hideModalHandler(!barstate);
            }}
          >
            <Image
              src={logo}
              alt="BSBS logo"
              className={` h-20 -ml-5 cursor-pointer`}
              height={200}
              width={150}
              priority
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, rotate: 180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            exit={{ opacity: 0, transition: { delay: 0.4 }, rotate: 85 }}
            className="cursor-pointer"
            onClick={() => {
              hideModalHandler(!barstate);
            }}
          >
            <XMarkIcon
              className="h-20 w-20 stroke-[0.4px] mt-5"
              color="orange"
            />
          </motion.p>
        </div>
        <div className="flex justify-center w-full max-lg:px-5  max-w-7xl mx-auto mt-20">
          <ul className="flex flex-col justify-start text-center items-center gap-y-8 tracking-tight underline underline-offset-8  py-4 capitalize font-[500] text-3xl  lg:text-4xl leading-[30px] mt-32 lg:mt-40 text-orange-500">
            <Link href="/" className="w-full">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-lg:px-5"
                transition={{ delay: 1.2 }}
                exit={{ opacity: 0, transition: { delay: 0.6 } }}
                onClick={() => {
                  hideModalHandler(!barstate);
                }}
              >
                Home
              </motion.li>
            </Link>
            <Link href="/AboutUs" className="w-full">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-lg:px-5"
                transition={{ delay: 1.3 }}
                exit={{ opacity: 0, transition: { delay: 0.7 } }}
                onClick={() => {
                  hideModalHandler(!barstate);
                }}
              >
                About us
              </motion.li>
            </Link>
            <Link
              href="http://acce.edves.net"
              className="w-full"
              target="_blank"
            >
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-lg:px-5"
                transition={{ delay: 1.3 }}
                exit={{ opacity: 0, transition: { delay: 0.7 } }}
                onClick={() => {
                  hideModalHandler(!barstate);
                }}
              >
                Portal
              </motion.li>
            </Link>
            <Link href="/Principal-welcome" className="w-full">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-lg:px-5"
                transition={{ delay: 1.3 }}
                exit={{ opacity: 0, transition: { delay: 0.7 } }}
                onClick={() => {
                  hideModalHandler(!barstate);
                }}
              >
                our principal
              </motion.li>
            </Link>
            <Link href="/Founder" className="w-full">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                exit={{ opacity: 0, transition: { delay: 0.6 } }}
                className="max-lg:px-5"
                onClick={() => {
                  hideModalHandler(!barstate);
                }}
              >
                Our Founder
              </motion.li>
            </Link>
            <Link href="/executive-team" className="w-full">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="max-lg:px-5"
                transition={{ delay: 1.3 }}
                exit={{ opacity: 0, transition: { delay: 0.7 } }}
                onClick={() => {
                  hideModalHandler(!barstate);
                }}
              >
                executive team
              </motion.li>
            </Link>
            <Link href="/WhyJoinUs" className="w-full">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                exit={{ opacity: 0, transition: { delay: 0.5 } }}
                className="max-lg:px-5"
                onClick={() => {
                  hideModalHandler(!barstate);
                }}
              >
                Careers
              </motion.li>
            </Link>
            <Link href="/Vacancy" className="w-full">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                exit={{ opacity: 0, transition: { delay: 0.5 } }}
                className="max-lg:px-5"
                onClick={() => {
                  hideModalHandler(!barstate);
                }}
              >
                Vacancy
              </motion.li>
            </Link>
            <Link href="/" className="w-full">
              <motion.li
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                exit={{ opacity: 0, transition: { delay: 0.5 } }}
                className="max-lg:px-5"
                onClick={() => {
                  hideModalHandler(!barstate);
                }}
              >
                Contacts
              </motion.li>
            </Link>
          </ul>
        </div>
      </motion.div>
    </>
  );
};

export default Mobilenav;
