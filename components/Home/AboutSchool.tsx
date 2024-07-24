import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";
import image from "../../public/LatestImage/diversity.jpg";
import image2 from "../../public/LatestImage/welcome.jpg";
import image3 from "../../public/LatestImage/jangilover.jpg";
import image4 from "../../public/LatestImage/clasactivity.jpg";
import Link from "next/link";
import ClientButton from "../ui/ClientButton";
import { PortableText } from "@/sanity/Structure/PortableText";

type Props = {
  data: WhyChooseOurSchoolField;
};

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
  const { data } = props;
  return (
    <section className="bg-gray-300/40  py-20">
      <div className="max-lg:px-4 md:w-[80%] mx-auto  flex flex-col ">
        <h1 className="text-3xl font-bold leading-[38.6px] text-texts max-md:text-center max-lg:mx-auto mb-4">
          {data?.title}
        </h1>
        <p className="max-md:text-center leading-snug prose max-lg:mx-auto dark:prose-invert prose-a:text-primary text-base lg:text-xl">
          {data?.summary ? <PortableText value={data?.summary} /> : null}
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
                image={data?.imagegrid[0]?.image.url}
                blurdataurl={data?.imagegrid[0]?.image.blurdataUrl}
                alt={data?.imagegrid[0]?.image.alt}
                text={data?.imagegrid[0]?.shortimagetext}
              />
            }
            {
              <AboutCard
                className="h-[300px] lg:h-[506px] w-full lg:w-[40%]"
                image={data?.imagegrid[1]?.image.url}
                blurdataurl={data?.imagegrid[1]?.image.blurdataUrl}
                alt={data?.imagegrid[1]?.image.alt}
                text={data?.imagegrid[1]?.shortimagetext}
              />
            }
          </section>
          <section className="w-full flex flex-col lg:flex-row gap-x-8  gap-y-6 justify-between">
            {
              <AboutCard
                className="h-[300px] lg:h-[506px] w-full lg:w-[40%] "
                image={data?.imagegrid[2]?.image.url}
                blurdataurl={data?.imagegrid[2]?.image.blurdataUrl}
                alt={data?.imagegrid[2]?.image.alt}
                text={data?.imagegrid[2]?.shortimagetext}
              />
            }
            {
              <AboutCard
                className="h-[300px] lg:h-[506px] w-full  lg:w-[60%]"
                image={data?.imagegrid[3]?.image.url}
                blurdataurl={data?.imagegrid[3]?.image.blurdataUrl}
                alt={data?.imagegrid[3]?.image.alt}
                text={data?.imagegrid[3]?.shortimagetext}
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
  image: string;
  blurdataurl: string;
  text: string;
  alt: string;
};
function AboutCard(props: AboutCardProps) {
  const { className, blurdataurl, image, text, alt } = props;
  return (
    <>
      <div className={cn(`${className} bg-black/80 relative ring-slate-300`)}>
        <Image
          src={image}
          alt={alt}
          {...(blurdataurl && {
            placeholder: "blur",
            blurDataURL: blurdataurl,
          })}
          fill
          className="object-cover object-top"
        />
        <div className="absolute bg-black/40 p-6 bottom-8 left-4 w-[80%] md:w-[50%] text-white">
          <h2 className="capitalize  text-base lg:text-[17px]">{text}</h2>
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
