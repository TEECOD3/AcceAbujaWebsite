import React from "react";
import { Button } from "../ui/button";
import Hightlightlides from "../ui/HightlightSlides";

type Props = {};

const Highlights = (props: Props) => {
  return (
    <div className="bg-gray-300/40 w-full">
      <div className="max-lg:px-5 lg:w-[80%] mx-auto pb-10 pt-5">
        <div className="w-full">
          <Hightlightlides />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
