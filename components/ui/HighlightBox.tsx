import Image, { StaticImageData } from "next/image";
import React from "react";
import ClientButton from "./ClientButton";

type Props = {
  image: StaticImageData;
};

const HighlightBox = (props: Props) => {
  const { image } = props;
  return (
    <div className="mt-2 ">
      <div className="h-[250px] sm:h-[300px] w-full bg-black relative">
        <Image
          src={image}
          alt="highlightimages"
          fill
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col lg:w-[90%] gap-y-4 mx-auto ">
        <div className="text-texts text-base mt-3">
          By John Doe l Aug 23, 2021
        </div>
        <h1 className="text-xl lg:text-2xl font-bold ">
          A UX Case Study Creating a Studious Environment for Students:
        </h1>
        <p className="text-texts  max-sm:text-base xtext-xs lg:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          incidunt cumque doloribus repellendus sed saepe. Dolor reiciendis
          commodi ea debitis consequatur ipsa totam pariatur mollitia
          aspernatur! Necessitatibus iure suscipit autem!
        </p>
        <ClientButton
          className="w-full bg-orange-500 rounded-none capitalize font-bold"
          href={`WeeklyHighlights/292992`}
        >
          read more
        </ClientButton>
      </div>
    </div>
  );
};

export default HighlightBox;
