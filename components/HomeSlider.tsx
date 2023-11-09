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
import SwiperButton from "./ui/SwiperButton";
const images = [
  slide_image_1,
  slide_image_2,
  slide_image_3,
  slide_image_4,
  slide_image_5,
];
function HomeSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const breakpoints = {
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  };

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <div className="max-lg:px-4 relative">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        speed={1000}
        autoplay={{
          delay: 3000,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        navigation={false}
        on={{
          slideChange: () => {
            handleSlideChange;
          },
        }}
        centeredSlides={true}
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
        breakpoints={breakpoints}
        className="!mx-0 !px-0 h-[400px] lg:h-[600px] w-full flex items-center justify-center"
      >
        {images.map((image, idx) => (
          <SwiperSlide
            className={cn(`rounded-lg flex items-center justify-center   `)}
            key={idx}
          >
            <Image
              src={image}
              alt="sliderimage"
              loading="lazy"
              placeholder="blur"
              className={cn(
                `h-[500px] w-full object-cover rounded-sm ${
                  idx === activeIndex && "shadow-xl"
                }`
              )}
            />
          </SwiperSlide>
        ))}
        <div className="absolute bottom-2 lg:bottom-4 z-[4000]  w-full flex items-center">
          <SwiperButton className="w-full flex items-center justify-center" />
        </div>
      </Swiper>
    </div>
  );
}

export default HomeSlider;
