import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="w-full h-[40%] bg-gradient-to-r from-[#fac61b] from-10% via-[#f39f20] via-30% pt-16 pb-40 to-[#f38120] to-90% ">
      <div className="flex flex-col gap-y-2 lg:w-[50%] h-full mx-auto text-center items-center justify-center ">
        <p className="uppercase text-center  text-base text-white mb-2 font-semibold">
          Al-Ansar Centre for Comprehensive{" "}
          <br className="hidden max-lg:block" /> Education (ACCE)
        </p>
        <p className="max-md:leading-[44px] text-5xl font-semibold text-white capitalize mb-4">
          inspiring excellence
        </p>
        <p className="text-white font-semibold max-sm:px-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          accusamus quibusdam, assumenda iusto velit earum voluptas cupiditate
          officiis fuga dignissimos
        </p>
      </div>
    </div>
  );
};

export default Hero;
