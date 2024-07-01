import Image from "next/image";
import React from "react";
import image from "../../public/president.jpg";
import { Button } from "../ui/button";
import ClientButton from "../ui/ClientButton";

type Props = {
  data: FounderSection;
};

const HeadSection = (props: Props) => {
  const { data } = props;

  return (
    <section className="bg-gray-300/40 pt-36 -mt-32">
      <div className="px-3 md:w-[90%] py-10 xl:w-[95%] mx-auto flex flex-col-reverse xl:flex-row">
        <div className="w-full flex items-center justify-center max-lg:mt-10">
          <div className="flex flex-col  max-xl:text-center xl:items-start justify-center gap-y-4 lg:gap-y-6 w-full lg:w-[70%] text-texts ">
            <p className="text-orange-500  text-[18px] uppercase ">Founder</p>

            <p className="font-bold max-md:text-center text-3xl leading-[38.4px] tracking-tight ">
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

            <ClientButton
              href="/Founder"
              className=" uppercase max-xl:mx-auto w-2/4 py-6 bg-orange-400 max-w-max text-white  mt-10 rounded-none"
            >
              read more
            </ClientButton>
          </div>
        </div>
        <div className="w-full max-xl:mt-8">
          <div className=" mx-auto w-[90%] h-[500px] lg:h-[684px] lg:w-[566px] relative ">
            <Image
              src={image}
              alt="teacherimage"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadSection;
