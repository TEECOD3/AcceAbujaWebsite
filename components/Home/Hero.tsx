import { getheros } from "@/sanity/Queries/homepage";
import React from "react";
import Reveal from "../Animations/Reveal";

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
        <Reveal className="w-full h-full">
          <p className="uppercase text-center  text-base text-white mb-2 font-semibold max-lg:px-2 max-lg:tracking-tight">
            {schoolname}
          </p>
        </Reveal>
        <Reveal className="w-full h-full" delay={0.1}>
          <p className="max-md:leading-[44px] text-5xl font-semibold text-white capitalize mb-4">
            {Headertext}
          </p>
        </Reveal>
        <Reveal className="w-full h-full" delay={0.2}>
          <p className="text-white   max-sm:px-3">{herodescription} </p>
        </Reveal>
      </div>
    </div>
  );
};

export default Hero;
