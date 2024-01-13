import Image from "next/image";
import React from "react";
import logo from "../../public/__after.png";

type Props = {};

const LetsGrow = (props: Props) => {
  return (
    <div className="py-32 bg-[#FEF4EA] relative">
      <Image
        src={logo}
        alt="watermark logo"
        fill
        className="h-full w-full bg-fixed object-cover"
      />
      <div className="w-[80%] mx-auto ">
        <div className="w-full lg:w-1/2 flex-col gap-y-8 flex">
          <h3 className="text-3xl lg:text-6xl  capitalize font-bold text-texts">
            Lets grow together
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            maxime repellendus praesentium maiores quam sunt asperiores
            distinctio odio vel. Quae deserunt quo voluptatem consequuntur,
            illum eveniet nemo debitis illo nulla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LetsGrow;
