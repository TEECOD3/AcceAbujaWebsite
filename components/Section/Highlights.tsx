import React from "react";
import { Button } from "../ui/button";

type Props = {};

const Highlights = (props: Props) => {
  return (
    <section className="w-[80%] mx-auto">
      <div className="flex justify-between max-lg:justify-center  ">
        <div className="">
          <h2 className="text-texts text-3xl font-bold tracking-tight max-lg:text-center max-lg:my-8">
            This weeks highlights
          </h2>
        </div>
        <div className="hidden lg:block">
          <Button className="w-56  bg-orange-500 rounded-none text-white py-4 px-2">
            see all testimonies
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
