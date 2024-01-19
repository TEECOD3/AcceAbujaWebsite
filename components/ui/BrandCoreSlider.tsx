"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {};

export const testimoonials = [
  {
    id: 1,
    description:
      "Lorem ipsum dolor, sit amet icing elit. Recusandae rerum beatae itaque doloremque porro molestiae? !consectetur  adipisicing elit. Recusandae rerum beatae itaque doloremque porro molestiae adipisicing elit. Recusandae rerum beatae itaque doloremque porro molestiae",
    name: "our mission",
    position: "Marketing Manager",
  },
  {
    id: 2,
    description:
      "Lorem ipsum dolor, icing elit. Recusandae rerum beatae itaque doloremque porro molestiae? !  adipisicing elit. Recusandae rerum beatae itaque doloremque porro molestiaesit amet consectetur adipisicing elit. Recusandae rerum beatae itaque doloremque porro molestiae? !",
    name: "our vision",
    position: "Operations Director",
  },
];

const BrandcoreSlider = (props: Props) => {
  return (
    <>
      <div className="mx-auto mt-4 flex h-full flex-col lg:flex-row xl:mt-8 ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          speed={2500}
          loop={true}
          className="relative flex w-full items-center justify-start rounded-2xl "
        >
          {testimoonials.map((testimony) => (
            <SwiperSlide
              key={testimony.id}
              className="h-full w-full transition-all delay-75 ease-in-out "
            >
              <TestimonialCard
                name={testimony.name}
                description={testimony.description}
                key={testimony.id}
                position={testimony.position}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default BrandcoreSlider;

type TestimonialProps = {
  description: string;
  name: string;
  position: string;
};

function TestimonialCard(props: TestimonialProps) {
  const { description, name, position } = props;
  return (
    <div className="flex flex-col py-10 px-4 sm:px-6 md:px-8 ">
      <p className="text-white text-lg md:text-2xl xl:text-xl mt-8 capitalize">
        {name}
      </p>
      <div className="w-full flex items-start flex-col mt-10 gap-y-16">
        <p className="capitalize font-light  text-white text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
