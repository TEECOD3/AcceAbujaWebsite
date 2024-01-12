import React from "react";

type Props = {};

const Inspirationboxs = (props: Props) => {
  return (
    <div>
      <div className="w-[300px] h-[400px] p-6 border-orange-400/70 border-[1px] cursor-pointer max-md:user-select-none max-md:pointer-events-none">
        <div className="rounded-full bg-black h-20 w-20"></div>

        <div className="flex flex-col gap-4 mt-10">
          <div className="flex items-center gap-x-3 ">
            <p className="capitalize text-texts font-bold">temitope</p>
            <div className="  bg-orange-500/30 text-orange-500 px-1 font-semibold text-base ">
              student
            </div>
          </div>
          <p className="text-texts">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            delectus blanditiis doloremque quis aliquam obcaecati quos? Sapiente
            iste nobis cupiditate, optio id facilis quisquam similique quas.
            Praesentium dolorum quae velit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Inspirationboxs;
