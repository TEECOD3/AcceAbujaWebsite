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
    <div className="py-32 bg-[#FEF4EA] relative ">
      <div className="flex container">
        <div className="max-lg:px-5 lg:w-full">
          <div className="w-full  flex-col gap-y-8 flex">
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
        <div className="w-full lg:flex items-center justify-center hidden">
          <Image
            src={"/LatestImage/q.jpg"}
            alt="lets grow images"
            height={400}
            width={400}
            className="size-[18rem] bg-fixed object-cover rounded-full"
          />{" "}
          <Image
            src={"/LatestImage/welcome.jpg"}
            alt="lets grow images"
            height={400}
            width={400}
            className="size-[18rem] bg-fixed object-cover -ml-4 rounded-full border-white border-[2px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LetsGrow;
