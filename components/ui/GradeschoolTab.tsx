import React from "react";

type Props = {
  gradetype: string;
};

const GradeschoolTab = (props: Props) => {
  const { gradetype } = props;
  return (
    <div className="mx-auto max-sm:px-4 bg-white lg:bg-[#FFF7F0] lg:py-10 lg:px-28 flex flex-col lg:flex-row justify-between gap-x-10 gap-y-8">
      <div className="w-full flex flex-col gap-y-4 mt-3">
        <h2 className="uppercase font-semibold text-base text-orange-400 lg:text-2xl ">
          grade k3-1
        </h2>
        <h1 className="capitalize text-3xl font-bold text-black ">
          {gradetype}
        </h1>
        <div className="flex flex-col gap-y-4">
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            nostrum cum quaerat eos incidunt, eveniet laborum officiis
            consectetur voluptatibus quae blanditiis, hic cumque rem a corporis
            asperiores voluptates! Inventore, architecto.
          </p>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            nostrum cum quaerat eos incidunt, eveniet laborum officiis
            consectetur voluptatibus quae blanditiis, hic cumque rem a corporis
            asperiores voluptates! Inventore, architecto.
          </p>
        </div>
      </div>
      <div className="h-[400px] bg-black/80 w-full"></div>
    </div>
  );
};

export default GradeschoolTab;
