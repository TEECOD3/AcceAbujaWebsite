import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";
import image from "../../public/LatestImage/diversity.jpg";
import image2 from "../../public/LatestImage/welcome.jpg";
import image3 from "../../public/LatestImage/jangilover.jpg";
import image4 from "../../public/LatestImage/clasactivity.jpg";
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
    image: image4,
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
        <p className="max-md:text-center leading-snug">
          In our short period of existence, we have assembled an exceptional
          team with a broad mix of educational and professional experiences.
          Diversity and inclusiveness are a strong business imperative for us as
          we respect the competencies, talents and differences of our diverse
          group of employees. The representation of the Nigeria system in our
          workforce is not merely to comply with the corporate philosophy and
          policy, but a belief in the strength of diversity and a commitment to
          inclusion. We will continue to strive for fair representation in our
          recruitment process without compromising on skills and fit.
        </p>
        <ClientButton
          href="/WhyJoinUs"
          className=" uppercase max-xl:mx-auto max-w-max py-6 bg-orange-400 text-white  mt-10 rounded-none"
        >
          read more
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
