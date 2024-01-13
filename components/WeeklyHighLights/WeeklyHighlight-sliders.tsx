import React from "react";
import Hightlightlides from "../ui/HightlightSlides";

type Props = {};

const WeeklyHighlightsliders = (props: Props) => {
  return (
    <div className=" mt-28 md:m-24 xl:mt-0 ">
      <div className="w-[90%] mx-auto flex  flex-col gap-y-8 max-sm:w-[90%]">
        <Hightlightlides />
      </div>
    </div>
  );
};

export default WeeklyHighlightsliders;
