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
      "I am incredibly satisfied with the services provided by Meeras Software Solutions. They have transformed our content management processes, making them more streamlined and efficient. The AI-powered solutions have revolutionized the way we organize and discover our digital assets. Highly recommended!",
    name: "John Smith",
    position: "Marketing Manager",
  },
  {
    id: 2,
    description:
      "Meeras Software Solutions has been a game-changer for our business. Their IoT solutions have helped us achieve significant operational improvements and cost savings. We now have real-time visibility into our processes and can make data-driven decisions. We are delighted with the results!",
    name: "Emily Johnson",
    position: "Operations Director",
  },
  {
    id: 3,
    description:
      "Choosing Meeras Software Solutions for our virtual display card needs was a fantastic decision. Their products have exceeded our expectations in terms of performance and visual quality. The team at Meeras has been extremely supportive throughout the process",
    name: "David Thompson",
    position: "Gaming Enthusiast",
  },
  {
    id: 4,
    description:
      "Meeras Software Solutions has transformed our business with their exceptional virtual services. The virtual display cards have taken our design and animation projects to a whole new level. The realism and performance are unmatched. We highly recommend Meera's to all creative professionals!",
    name: "Sophia Anderson",
    position: "Creative Director",
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
    <div className="flex flex-col items-center py-10 px-4 sm:px-6 md:px-8 ">
      <p className="text-white text-lg md:text-2xl xl:text-xl mt-8">
        {description}
      </p>

      <div className="w-full flex items-start flex-col mt-10 sm:mt-4">
        <h3 className="capitalize font-extralight text-xl md:text-2xl text-white">
          {name}
        </h3>
        <h4 className="uppercase font-medium text-base md:mt-3 text-white">
          {position}
        </h4>
      </div>
    </div>
  );
}
