import React from "react";
import BrandcoreSlider from "../ui/BrandCoreSlider";
import Image from "next/image";
import image from "../../public/logo/SchoolImage.jpeg";

type Props = {};

const MissionVision = (props: Props) => {
  return (
    <section className="relative lg:h-[700px] bg-[#232323] mt-10">
      <Image
        alt="school image"
        src={image}
        fill
        className="h-full w-full object-cover"
      />
      <div className="w-full lg:w-[80%] mx-auto mt-8 h-full flex justify-end lg:mr-[24%] relative z-[40]">
        <div className="h-full w-full lg:w-[40%] bg-[#394360]/80">
          <BrandcoreSlider />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
