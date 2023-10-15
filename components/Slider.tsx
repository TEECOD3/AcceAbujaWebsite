"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Arrowright from "./Arrowright";
import Arrowleft from "./ui/Arrowleft";
// import Slider from "react-slick";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "../public/img_1.jpg";
import slide_image_2 from "../public/img_2.jpg";
import slide_image_3 from "../public/img_3.jpg";
import slide_image_5 from "../public/img_5.jpg";
import slide_image_6 from "../public/img_3.jpg";
import slide_image_7 from "../public/img_5.jpg";
import slide_image_8 from "../public/img_5.jpg";
import slide_image_9 from "../public/img_3.jpg";
import slide_image_4 from "../public/img_5.jpg";
import Image from "next/image";

function Slider() {
  return (
    <div className="container !px-0">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          //   clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container !mx-0 !px-0"
      >
        <SwiperSlide className="swiper-slide ">
          <Image src={slide_image_1} alt="slide_image" className="shadow-2xl" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <Image src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="flex gap-x-4">
            <div className="swiper-button-prev slider-arrow">
              <div className="swiper-button-next slider-arrow text-black">
                <Arrowleft /> Prev
              </div>
            </div>
            <div className="swiper-button-next slider-arrow">
              Next <Arrowright />
            </div>
          </div>

          <div className="w-full flex items-center justify-center bg-red-400">
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;
