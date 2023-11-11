import React from "react";
import { Button } from "../ui/button";
import Hightlightlides from "../ui/HightlightSlides";

type Props = {};

const Highlights = (props: Props) => {
  return (
    <section className="w-[80%] mx-auto mt-4">
      <div className="w-full">
        <Hightlightlides />
      </div>
    </section>
  );
};

export default Highlights;
