import Image from "next/image";
import React from "react";
import image from "../../public/teacherimage.png";
import { Button } from "../ui/button";

type Props = {};

const HeadSection = (props: Props) => {
  return (
    <section className="bg-gray-300/40 pt-20">
      <div className="px-3 md:w-[90%] xl:w-[90%] mx-auto flex flex-col xl:flex-row">
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col   max-xl:text-center xl:items-start justify-center gap-y-4 lg:gap-y-6 w-full lg:w-[70%] text-texts ">
            <p className="text-orange-500  text-[18px] uppercase max-md:font-bold font-medium ">
              Head of school
            </p>
            <p className="font-bold max-md:text-center text-3xl leading-[38.4px] ">
              You are welcome to our <br />
              School
            </p>
            <p className="max-md:text-center text-base lg:text-xl">
              I am delighted to welcome you to a new and exciting school in the
              city of Abuja, the Federal Capital Territory.
            </p>
            <p className="max-md:text-center text-base lg:text-xl">
              First and foremost, I wish to thank the Almighty Allah for giving
              us the opportunity to serve our community through the
              establishment of this highly rated school here in Gwarimpa. ACCE
              is clearly a school where they the desire to learn is contagious
              and students of all ability flourish because everyone works hard
              to create a learning environment where everybody is welcome and
              diversity is celebrated.
            </p>

            <Button className=" uppercase max-xl:mx-auto w-2/4 py-6 bg-orange-400 text-white  mt-10 rounded-none">
              read more
            </Button>
          </div>
        </div>
        <div className="w-full max-xl:mt-8">
          <div className=" mx-auto w-[90%] h-[500px] lg:h-[684px] lg:w-[566px] relative ">
            <Image
              src={image}
              alt="teacherimage"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadSection;
