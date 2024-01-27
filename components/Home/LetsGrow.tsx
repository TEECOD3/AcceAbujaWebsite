import Image from "next/image";
import React from "react";
import logo from "../../public/__after.png";
import ClientButton from "../ui/ClientButton";
import { ArrowRightIcon } from "lucide-react";

type Props = {};

const LetsGrow = (props: Props) => {
  return (
    <div className="py-32 bg-[#FEF4EA] relative">
      <Image
        src={logo}
        alt="watermark logo"
        fill
        className="h-full w-full bg-fixed object-cover"
      />
      <div className="w-[80%] mx-auto ">
        <div className="w-full lg:w-1/2 flex-col gap-y-8 flex">
          <h3 className="text-3xl lg:text-6xl  capitalize font-bold text-texts">
            Lets grow together
          </h3>
          <p>
            The sum total of all that the ACCE-ABUJA represents today is rooted
            in our Culture. The ACCE&apos;s culture is built on its shared
            values and corporate philosophy. It&apos;s really the people that
            differentiate the Authority. We hire people who are disciplined,
            focused, smart and we favor ability over experience. Although our
            employees imbibe and embody the common goals and visions of the
            Authority, we hail from a broad and diverse background, reflecting
            the diversity and inclusiveness of our teams
          </p>
          <ClientButton
            href="#contact"
            className=" text-base font-bold uppercase max-w-max px-0 cursor-pointer z-[20]"
            variant={"link"}
          >
            <span>lets partner.</span>{" "}
            <ArrowRightIcon className="h-4 w-4 ml-2" />
          </ClientButton>
        </div>
      </div>
    </div>
  );
};

export default LetsGrow;
