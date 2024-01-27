import Image from "next/image";
import React from "react";
import WhyJoinusImage from "../../public/image/handstogether.jpg";
import WhyJoinusImageBlur from "../../public/image/handstogetherBlur.jpg";

type Props = {};

const Page = (props: Props) => {
  return (
    <section className="">
      <div className="w-full h-[400px] lg:h-[600px] relative">
        <Image
          src="/image/handstogether.jpg"
          alt="Hands on deck"
          placeholder="blur"
          loading="lazy"
          fill
          blurDataURL="/image/handstogetherBlur.jpg"
          className="h-full w-full object-cover object-center transition-all  duration-1000 ease-out"
        />
      </div>

      <section>
        <p></p>
      </section>
    </section>
  );
};

export default Page;
