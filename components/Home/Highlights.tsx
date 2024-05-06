import React from "react";
import { Button } from "../ui/button";
import Hightlightlides from "../ui/HightlightSlides";
import getPosts from "@/lib/getPost";

type Props = {};

const Highlights = async (props: Props) => {
  const slidesdata = await getPosts();

  return (
    <div className="bg-gray-300/40 w-full">
      <div className="max-lg:px-5 lg:w-[80%] mx-auto pb-10 pt-5">
        <div className="w-full">
          <Hightlightlides highlightsData={slidesdata?.data} />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
