import React from "react";

type Props = {};

const AboutSchool = (props: Props) => {
  return (
    <section className="max-lg:px-4 lg:w-[80%] mx-auto  flex flex-col">
      <h1 className="text-2xl font-bold leading-[38.6px] text-texts max-md:text-center max-lg:mx-auto">
        Why Choose Our School
      </h1>

      <div className="flex flex-col gap-y-6">
        <section className="w-full flex flex-col lg:flex-row gap-x-8 gap-y-6  justify-between mt-16">
          <div className="h-[300px] lg:h-[506px] w-full lg:w-[70%] bg-black  "></div>
          <div className="h-[300px] lg:h-[506px] w-full bg-black lg:w-[30%]"></div>
        </section>
        <section className="w-full flex flex-col lg:flex-row gap-x-8  gap-y-6 justify-between">
          <div className="h-[300px] lg:h-[506px] w-full lg:w-[30%] bg-black  "></div>
          <div className="h-[300px] lg:h-[506px] w-full bg-black lg:w-[70%]"></div>
        </section>
      </div>
    </section>
  );
};

export default AboutSchool;
