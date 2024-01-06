import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";
import image from "../../public/cutekids.jpg";
import image2 from "../../public/cuterkids.jpg";
import image3 from "../../public/childwithtestingtool.jpg";

type Props = {};

const somedata = [
  {
    image: image,
    text: "we offer the best education",
  },
  {
    image: image2,
    text: "education at it peak,",
  },
  {
    image: image3,
    text: "   an educational and international comunity",
  },
  {
    image: image,
    text: "   an educational and international comunity",
  },
];

const AboutSchool = (props: Props) => {
  return (
    <section className="bg-gray-300/40 -mt-24 lg:-mt-10 py-20">
      <div className="max-lg:px-4 md:w-[80%] mx-auto  flex flex-col ">
        <h1 className="text-3xl font-bold leading-[38.6px] text-texts max-md:text-center max-lg:mx-auto">
          Why Choose Our School
        </h1>

        <div className="flex flex-col gap-y-6">
          <section className="w-full flex flex-col lg:flex-row gap-x-8 gap-y-6  justify-between mt-16">
            {
              <AboutCard
                className="h-[300px] lg:h-[506px] w-full lg:w-[60%]"
                aboutdata={somedata[0]}
              />
            }
            {
              <AboutCard
                className="h-[300px] lg:h-[506px] w-full lg:w-[40%]"
                aboutdata={somedata[1]}
              />
            }
          </section>
          <section className="w-full flex flex-col lg:flex-row gap-x-8  gap-y-6 justify-between">
            {
              <AboutCard
                className="h-[300px] lg:h-[506px] w-full lg:w-[40%] "
                aboutdata={somedata[2]}
              />
            }
            {
              <AboutCard
                className="h-[300px] lg:h-[506px] w-full  lg:w-[60%]"
                aboutdata={somedata[3]}
              />
            }
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutSchool;

type AboutCardProps = {
  className: string;
  aboutdata: {
    image: StaticImageData;
    text: string;
  };
};
function AboutCard(props: AboutCardProps) {
  const { className, aboutdata } = props;
  return (
    <>
      <div className={cn(`${className} bg-black/80 relative`)}>
        <Image
          src={aboutdata.image}
          alt="Childrenimages"
          fill
          className="object-cover object-top"
        />
        <div className="absolute bg-black/40 p-6 bottom-8 left-4 w-[80%] md:w-[50%] text-white">
          <h2 className="capitalize  text-base lg:text-xl">{aboutdata.text}</h2>
          <p className="uppercase text-sm lg:text-base">read more</p>
        </div>
      </div>
    </>
  );
}
