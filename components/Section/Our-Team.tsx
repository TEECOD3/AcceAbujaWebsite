import React from "react";
import OurTeamItem from "../ui/OurTeam-Item";

type Props = {};

const OurTeam = (props: Props) => {
  return (
    <section className="  bg-[#FFF7F0] flex items-center justify-center flex-col gap-8 lg:gap-y-20  lg:px-0 py-10 lg:py-20">
      <div className="flex flex-wrap items-center justify-center w-full capitalize">
        <h1 className=" text-2xl lg:text-4xl font-bold text-black">
          meet our team of experts
        </h1>
      </div>
      <div className="w-full lg:w-[80%] mx-auto  grid grid-cols-1 md:grid-cols-4 place-items-center gap-8">
        <OurTeamItem />
        <OurTeamItem />
        <OurTeamItem />
        <OurTeamItem />
      </div>
      <div className="w-full lg:w-[80%] mx-auto  grid grid-cols-1 max-md:grid-rows-3 md:grid-cols-3 place-items-center gap-8">
        <OurTeamItem />
        <OurTeamItem />
        <OurTeamItem />
      </div>
    </section>
  );
};

export default OurTeam;
