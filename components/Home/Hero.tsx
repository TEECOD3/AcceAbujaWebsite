import { getheros } from "@/sanity/Queries/homepage";
import React from "react";

type Props = {
  schoolname: schoolname;
  herodescription: herodescription;
  Headertext: HeaderText;
};

const Hero = async (props: Props) => {
  const { schoolname, herodescription, Headertext } = props;
  return (
    <div className="w-full h-[40%] bg-gradient-to-b  lg:bg-gradient-to-r from-[#fac61b] from-10% via-[#f39f20] via-30% pt-16 pb-40 to-[#f38120] to-90% ">
      <div className="flex flex-col gap-y-2 lg:w-[50%] h-full mx-auto text-center items-center justify-center ">
        <p className="uppercase text-center  text-base text-white mb-2 font-semibold max-lg:px-2 max-lg:tracking-tight">
          {schoolname}
        </p>
        <p className="max-md:leading-[44px] text-5xl font-semibold text-white capitalize mb-4">
          {Headertext}
        </p>
        <p className="text-white   max-sm:px-3">{herodescription} </p>
      </div>
    </div>
  );
};

export default Hero;
