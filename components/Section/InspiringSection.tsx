import React from "react";
import { Button } from "../ui/button";

type Props = {};

const InspiringSection = (props: Props) => {
  return (
    <section className="w-[80%] mx-auto">
      <div className="flex justify-between max-lg:justify-center  ">
        <div className="">
          <h2 className="text-texts text-3xl font-bold tracking-tight max-lg:text-center max-lg:my-8">
            inspiring stories
          </h2>
        </div>
        <div className="hidden lg:block">
          <Button className="w-56  bg-orange-500 rounded-none text-white py-4 px-2">
            see all testimonies
          </Button>
        </div>
      </div>

      <div className="flex gap-x-4 overflow-x-scroll">
        <Inspirationboxs />
        <Inspirationboxs />
        <Inspirationboxs />
        <Inspirationboxs />
      </div>
    </section>
  );
};

export default InspiringSection;

function Inspirationboxs() {
  return (
    <div>
      <div className="w-[300px] h-[400px] p-6">
        <div className="rounded-full bg-black h-20 w-20"></div>

        <div className="flex flex-col gap-4 mt-10">
          <div className="flex items-center gap-x-3 ">
            <p className="capitalize text-texts font-bold">temitope</p>
            <div className="  bg-orange-500/30 text-orange-500 font-semibold text-base ">
              student
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            delectus blanditiis doloremque quis aliquam obcaecati quos? Sapiente
            iste nobis cupiditate, optio id facilis quisquam similique quas.
            Praesentium dolorum quae velit.
          </p>
        </div>
      </div>
    </div>
  );
}
