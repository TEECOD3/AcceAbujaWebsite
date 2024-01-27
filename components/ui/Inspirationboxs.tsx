import Image from "next/image";
import React from "react";
import image from "../../public/teacherimage.png";
import { cn } from "@/lib/utils";

type Props = {
  persondets: {
    name: string;
    position: string;
    description: string;
  };
};

const Inspirationboxs = ({ persondets }: Props) => {
  return (
    <div className="border-orange-400/70  border-[1px] ">
      <div className="w-[300px]   p-6  cursor-pointer max-md:user-select-none max-md:pointer-events-none">
        <div className="rounded-full bg-black h-20 w-20 relative overflow-hidden">
          <Image
            src={image}
            alt="sliderimage"
            loading="lazy"
            placeholder="blur"
            fill
            className={cn(
              `h-full w-full object-cover rounded-sm transition-all duration-1000 ease-out`
            )}
          />
        </div>

        <div className="flex flex-col gap-4 mt-10">
          <div className="flex items-center gap-x-3 ">
            <p className="capitalize text-texts font-bold">{persondets.name}</p>
            <div className="  bg-orange-500/30 text-orange-500 px-1 font-semibold text-base ">
              {persondets.position}
            </div>
          </div>
          <p className="text-texts text-base">{persondets.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Inspirationboxs;
