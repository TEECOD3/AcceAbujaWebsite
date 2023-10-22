"use client";
import React, { useState } from "react";
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

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <div className="bg-red-400">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        navigation={false}
        slidesPerView={2}
        on={{
          slideChange: () => {
            handleSlideChange;
          },
        }}
        autoplay={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="!mx-0 !px-0 lg:h-[600px] w-full flex items-center justify-center"
      >
        {images.map((image, idx) => (
          <SwiperSlide
            className={cn(
              `mx-4 mt-0 shadow-xl rounded-lg ${
                idx === activeIndex
                  ? "z-[100000000000000000] cursor-pointer bg-blue-500 p-4 focus:border-none h-[300px] lg:w-[800px] lg:h-[506px]"
                  : "-z-[2]  h-[200px] relative lg:h-[400px] pointer-events-none backdrop-blur-lg mt-8"
              }`
            )}
            key={idx}
          >
            <Image
              src={image}
              alt="sliderimage"
              blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
              priority
              placeholder="blur"
              className={cn(
                `lg:h-full w-full object-cover rounded-sm ${
                  idx === activeIndex && "shadow-xl"
                }`
              )}
            />
            {/* {idx !== slideindex && (
                <div
                  className={cn(
                    `absolute top-0 left-0 h-full w-full  backdrop-blur-md `
                  )}
                ></div>
              )} */}
          </SwiperSlide>
        ))}

        <div className="slider-controler">
          <div className="w-full flex items-center justify-center bg-red-400">
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
