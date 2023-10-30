import { cn } from "@/lib/utils";
import React from "react";

type Props = {};

const AboutSchool = (props: Props) => {
  return (
    <section className="bg-gray-300/40 -mt-24 lg:-mt-10 py-10">
      <div className="max-lg:px-4 md:w-[80%] mx-auto  flex flex-col ">
        <h1 className="text-2xl font-bold leading-[38.6px] text-texts max-md:text-center max-lg:mx-auto">
          Why Choose Our School
        </h1>

        <div className="flex flex-col gap-y-6">
          <section className="w-full flex flex-col lg:flex-row gap-x-8 gap-y-6  justify-between mt-16">
            <AboutCard className="h-[300px] lg:h-[506px] w-full lg:w-[60%]" />
            <AboutCard className="h-[300px] lg:h-[506px] w-full lg:w-[40%]" />
          </section>
          <section className="w-full flex flex-col lg:flex-row gap-x-8  gap-y-6 justify-between">
            <AboutCard className="h-[300px] lg:h-[506px] w-full lg:w-[40%] " />
            <AboutCard className="h-[300px] lg:h-[506px] w-full  lg:w-[60%]" />
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutSchool;

type AboutCardProps = {
  className: string;
};
function AboutCard(props: AboutCardProps) {
  const { className } = props;
  return (
    <>
      <div className={cn(`${className} bg-black/80 relative`)}>
        <div className="absolute bg-black p-6 bottom-8 left-4 w-[80%] md:w-[50%] text-white">
          <h2 className="capitalize  text-base lg:text-xl">
            an educational and international comunity
          </h2>
          <p className="uppercase text-sm lg:text-base">read more</p>
        </div>
      </div>
    </>
  );
}
