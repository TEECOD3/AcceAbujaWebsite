"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Arrowright from "./Arrowright";
import Arrowleft from "./ui/Arrowleft";
// import Slider from "react-slick";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import slide_image_1 from "../public/img_1.jpg";
import slide_image_2 from "../public/img_2.jpg";
import slide_image_3 from "../public/img_3.jpg";
import slide_image_5 from "../public/img_5.jpg";
import slide_image_4 from "../public/img_5.jpg";
import Image from "next/image";
import { cn } from "@/lib/utils";
const images = [
  slide_image_1,
  slide_image_2,
  slide_image_3,
  slide_image_4,
  slide_image_5,
];
function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const breakpoints = {
    // When window width is >= 700px
    700: {
      slidesPerView: 2,
    },
    // When window width is < 700px
    0: {
      slidesPerView: 1,
    },
  };

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <div className="">
      <Swiper
        grabCursor={true}
        loop={true}
        navigation={false}
        on={{
          slideChange: () => {
            handleSlideChange;
          },
        }}
        autoplay={true}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        breakpoints={breakpoints}
        className="!mx-0 !px-0 h-[400px] lg:h-[600px] w-full flex items-center justify-center"
      >
        {images.map((image, idx) => (
          <SwiperSlide
            className={cn(
              `mx-4 mt-0 shadow-xl rounded-lg flex items-center justify-center  `
            )}
            key={idx}
          >
            <Image
              src={image}
              alt="sliderimage"
              loading="lazy"
              placeholder="blur"
              className={cn(
                `h-[90%] w-full object-cover rounded-sm ${
                  idx === activeIndex && "shadow-xl"
                }`
              )}
            />
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="w-full flex items-center justify-center ">
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
