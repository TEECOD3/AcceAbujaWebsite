import React from "react";
import OurTeamItem from "../ui/OurTeam-Item";

type Props = {};

const OurTeam = (props: Props) => {
  return (
    <section className="  bg-[#FFF7F0] flex items-center justify-center flex-col gap-8 lg:gap-y-20  lg:px-0 py-10 lg:py-20">
      <div className="flex flex-wrap items-center justify-center w-full capitalize">
        <h1 className=" text-2xl lg:text-4xl font-bold text-texts">
          meet our team of experts
        </h1>
      </div>
      <div className="w-full md:w-[65%] lg:w-[80%] mx-auto  grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 x1place-items-center gap-20">
        <OurTeamItem />
        <OurTeamItem />
        <OurTeamItem />
        <OurTeamItem />
      </div>
      <div className="w-full lg:w-[80%] mx-auto  grid grid-cols-1 max-md:grid-rows-3 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
        <OurTeamItem />
        <OurTeamItem />
        <OurTeamItem />
      </div>
    </section>
  );
};

export default OurTeam;
