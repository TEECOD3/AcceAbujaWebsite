"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButton from "../ui/SwiperButton";
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

import slide_image_1 from "../../public/image/gallery1.jpeg";
import slide_image_2 from "../../public/image/gallery2.jpeg";
import slide_image_3 from "../../public/image/gallery3.jpeg";
import slide_image_5 from "../../public/image/5.jpg";
import slide_image_4 from "../../public/image/1.jpg";

import Image from "next/image";
import { cn } from "@/lib/utils";

import { motion } from "framer-motion";

const images = [
  slide_image_1,
  slide_image_2,
  slide_image_3,
  slide_image_4,
  slide_image_5,
];
function HomeSlider() {
  const breakpoints = {
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  };

  return (
    <section className="relative w-full -mt-10">
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
        centeredSlides={true}
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
        breakpoints={breakpoints}
        className="!mx-0 !px-0 h-[500px] lg:h-[600px] w-full flex items-center justify-center"
      >
        {images.map((image, idx) => (
          <SwiperSlide
            className={cn(`rounded-lg flex items-center justify-center   `)}
            key={idx}
          >
            <motion.div className="relative">
              <Image
                src={image}
                alt="sliderimage"
                loading="lazy"
                placeholder="blur"
                className={cn(
                  `h-[400px] lg:h-[500px] w-full object-cover rounded-sm `
                )}
              />
              <div className="absolute top-0 left-0 h-full w-full bg-black/40 z-[10] text-white">
                <div className=" absolute bottom-10 left-8 lg:w-[80%]">
                  <p className="max-md:leading-[44px] text-5xl font-semibold text-white capitalize mb-4">
                    inspiring excellence
                  </p>
                  <p className="text-white font-semibold  lg:w-3/4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Itaque accusamus quibusdam, assumenda iusto velit earum
                    voluptas cupiditate officiis fuga dignissimos
                  </p>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
        <div className="absolute bottom-10 z-[4000]  w-full flex items-center">
          <SwiperButton className="w-full flex items-center justify-center" />
        </div>
      </Swiper>
    </section>
  );
}

export default HomeSlider;
