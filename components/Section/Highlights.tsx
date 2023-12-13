import React from "react";
import { Button } from "../ui/button";
import Hightlightlides from "../ui/HightlightSlides";

type Props = {};

const Highlights = (props: Props) => {
  return (
    <div className="bg-gray-300/40 w-full">
      <div className="w-[80%] mx-auto py-10">
        <div className="w-full">
          <Hightlightlides />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
