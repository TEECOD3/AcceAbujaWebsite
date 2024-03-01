import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full h-[40%] bg-gradient-to-b  lg:bg-gradient-to-r from-[#fac61b] from-10% via-[#f39f20] via-30% pt-16 pb-40 to-[#f38120] to-90% ">
      <div className="flex flex-col gap-y-2 lg:w-[50%] h-full mx-auto text-center items-center justify-center ">
        <p className="uppercase text-center  text-base text-white mb-2 font-semibold">
          Al-Ansar Centre for Comprehensive{" "}
          <br className="hidden max-lg:block" /> Education (ACCE)
        </p>
        <p className="max-md:leading-[44px] text-5xl font-semibold text-white capitalize mb-4">
          inspiring excellence
        </p>
        <p className="text-white   max-sm:px-3">
          We commit ourselves to stimulating the intellectual, spiritual, moral,
          emotional and physical development of our pupils to bring the best out
          of them and to make them engineers of change in the society and make
          them upright citizens who fear Allah SWT in all their affairs.
        </p>
      </div>
    </div>
  );
};

export default Hero;
