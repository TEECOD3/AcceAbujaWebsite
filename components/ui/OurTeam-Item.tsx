import Image, { StaticImageData } from "next/image";
import React from "react";
import president from "../../public/president.jpg";

type Props = {
  image?: StaticImageData;
};

const OurTeamItem = (props: Props) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <figure className=" h-[250px]  w-[250px] relative md:h-[270px] md:w-[270px] overflow-hidden flex items-center justify-center rounded-full">
          <Image
            src={president}
            alt="watermark logo"
            fill
            className="h-full w-full object-cover object-top"
          />
        </figure>

        <figcaption className="flex flex-col gap-y-2 mt-4 items-center ">
          <p className="font-semibold text-xl capitalize">Dr.M. K.Dikwa,mni</p>
          <p>founder</p>
        </figcaption>
      </div>
    </>
  );
};

export default OurTeamItem;
