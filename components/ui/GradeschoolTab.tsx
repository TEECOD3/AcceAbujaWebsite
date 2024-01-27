import React from "react";
import { Button } from "./button";
import Image, { StaticImageData } from "next/image";

type Props = {
  gradetype: {
    name: string;
    ageGrade: string;
    about: string;
    image: StaticImageData;
  };
};

const GradeschoolTab = (props: Props) => {
  const { gradetype } = props;
  return (
    <div className="mx-auto max-sm:px-4 bg-white lg:bg-[#FFF7F0] lg:py-10 lg:px-28 flex flex-col lg:flex-row justify-between gap-x-10 gap-y-8">
      <div className="w-full flex flex-col gap-y-4 lg:gap-y-8 mt-3">
        <h2 className="uppercase font-semibold text-base text-orange-400 lg:text-2xl ">
          {gradetype.ageGrade}
        </h2>
        <h1 className="capitalize text-3xl font-bold text-texts ">
          {gradetype.name}
        </h1>
        <div className="flex flex-col max-sm:items-center max-sm:justify-center  gap-y-4 lg:gap-y-8 ">
          <p className="">{gradetype.about}</p>
          <Button className="w-56  bg-orange-500 rounded-none text-white py-4 px-2">
            READ MORE
          </Button>
        </div>
      </div>
      <div className="h-[400px] w-full relative">
        <Image
          src={gradetype.image}
          alt="gradlevel children image"
          className="object-cover object-top"
          fill
        />
      </div>
    </div>
  );
};

export default GradeschoolTab;
