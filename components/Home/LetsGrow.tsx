import Image from "next/image";
import React from "react";
import logo from "../../public/__after.png";
import ClientButton from "../ui/ClientButton";
import { ArrowRightIcon } from "lucide-react";

type Props = {
  data: LetsGrowTogetherSection;
};

const LetsGrow = (props: Props) => {
  const { data } = props;
  return (
    <div className="py-32 bg-[#FEF4EA] relative">
      <Image
        src={logo}
        alt="watermark logo"
        fill
        className="h-full w-full bg-fixed object-cover"
      />
      <div className="max-lg:px-5 lg:w-[80%] mx-auto ">
        <div className="w-full lg:w-1/2 flex-col gap-y-8 flex">
          <h3 className="text-3xl lg:text-4xl  capitalize font-bold text-texts">
            {data?.title}
          </h3>
          <p>{data?.description}</p>
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
