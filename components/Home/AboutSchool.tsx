import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";
import image from "../../public/cutekids.jpg";
import image2 from "../../public/cuterkids.jpg";
import image3 from "../../public/childwithtestingtool.jpg";
import Link from "next/link";
import ClientButton from "../ui/ClientButton";

type Props = {};

const somedata = [
  {
    image: image,
    text: "Team Diversity and Inclusiveness",
  },
  {
    image: image2,
    text: "ACCE's Inclusive Working Environment",
  },
  {
    image: image3,
    text: "Exciting Career at ACCE",
  },
  {
    image: image,
    text: "People-Centric Approach",
  },
];

const AboutSchool = (props: Props) => {
  return (
    <section className="bg-gray-300/40  py-20">
      <div className="max-lg:px-4 md:w-[80%] mx-auto  flex flex-col ">
        <h1 className="text-3xl font-bold leading-[38.6px] text-texts max-md:text-center max-lg:mx-auto mb-4">
          Why Choose Our School
        </h1>
        <p>
          In our short period of existence, we have assembled an exceptional
          team with a broad mix of educational and professional experiences.
          Diversity and inclusiveness are a strong business imperative for us as
          we respect the competencies, talents and differences of our diverse
          group of employees. The representation of the Nigeria system in our
          workforce is not merely to comply with the corporate philosophy and
          policy, but a belief in the strength of diversity and a commitment to
          inclusion. We will continue to strive for fair representation in our
          recruitment process without compromising on skills and fit.
        </p>{" "}
        <ClientButton
          href="/WhyJoinUs"
          variant={"link"}
          className="text-orange-400 font-bold text-sm inline-block px-0 max-w-max"
        >
          Readmore
        </ClientButton>
        <div className="flex flex-col gap-y-6 ">
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
      <div className={cn(`${className} bg-black/80 relative ring-slate-300`)}>
        <Image
          src={aboutdata.image}
          alt="Childrenimages"
          fill
          className="object-cover object-top"
        />
        <div className="absolute bg-black/40 p-6 bottom-8 left-4 w-[80%] md:w-[50%] text-white">
          <h2 className="capitalize  text-base lg:text-[17px]">
            {aboutdata.text}
          </h2>
          <Link
            className="uppercase text-[14px] font-bold cursor-pointer"
            href={"/WhyJoinUs"}
          >
            read more
          </Link>
        </div>
      </div>
    </>
  );
}
