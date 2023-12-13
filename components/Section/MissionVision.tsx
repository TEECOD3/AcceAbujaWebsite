import React from "react";
import BrandcoreSlider from "../ui/BrandCoreSlider";

type Props = {};

const MissionVision = (props: Props) => {
  return (
    <section className=" h-screen bg-[#232323]">
      <div className="w-full lg:w-[80%] mx-auto mt-8 h-full flex justify-end lg:mr-[24%]">
        <div className="h-full w-full lg:w-[40%] bg-[#394360]">
          <BrandcoreSlider />
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
