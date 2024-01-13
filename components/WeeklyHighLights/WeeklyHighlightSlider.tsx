"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import heroimage1 from "../../public/childwithtestingtool.jpg";
import heroimage2 from "../../public/cuterkids.jpg";
import heroimage3 from "../../public/grad1.jpg";
import SwiperbuttonHighlight from "@/components/ui/SwiperbuttonHighlight";

const arraydata = [
  {
    id: 1,
    text1: " By John Doe l Aug 23, 2021",
    text2: "A frontend Case Study Creating a coding environment for chidren",
    slug: "She-Forum-takes-another-big-step-in-the-women-empowerment-journey.",
  },
  {
    id: 2,
    text1: " By seyi oloyede l sep 23, 2024",
    text2: "  A UX Case Study Creating a Studious Environment for Students:",
    slug: "Voices-for-Womens-Health-ICommit-Campaign-in-Nigeria",
  },
  {
    id: 3,
    text1: " By temitope david l june 23, 2025",
    text2:
      "  A backend Case Study Creating a Studious Environment for backend Students:",
    slug: "7th-Edition-of-the-Africa-Women-Conference",
  },
];

const array = [
  { id: 1, image: heroimage1 },
  { id: 2, image: heroimage2 },
  { id: 2, image: heroimage3 },
];

type Props = {};

const WeeklyHighlightSlider = (props: Props) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <section className=" h-[90vh] sm:h-[100vh]">
      <div className="h-[200px] sm:h-1/2 w-full bg-gray-300 relative">
        <Image
          src={heroimage2}
          alt="news image"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="flex relative z-[10] -mt-32 sm:-mt-48 lg:-mt-32 flex-col lg:flex-row max-lg:mb-5 max-lg:px-5 lg:w-[80%] mx-auto">
        {/* left */}
        <div className="py-4  w-full flex ">
          <div className="p-8 bg-white border-slate border-[1px] shadow-lg xl:w-[90%] mx-auto flex flex-col lg:flex-row h-full items-start">
            <div className="flex flex-col gap-y-6">
              <h2 className=" text-texts text-base mt-3 ">
                {arraydata[activeSlideIndex]?.text1}
              </h2>
              <p className="text-2xl md:text-4xl font-bold capitalize">
                {arraydata[activeSlideIndex]?.text2}
              </p>
            </div>
          </div>
        </div>

        {/* right */}

        <div className="relative h-[400px] lg:w-1/2  flex lg:justify-end">
          <Swiper
            slidesPerView={1}
            effect={"fade"}
            onSlideChange={(swiper) => {
              setActiveSlideIndex(swiper.realIndex);
              const activeindex = swiper.activeIndex;
            }}
            className="transition-all lg:w-[60%] mx-auto h-full bg-blue-300"
            loop={true}
            onChange={() => {}}
            direction="horizontal"
            initialSlide={0}
            speed={1300}
            modules={[Autoplay, Navigation, Pagination, EffectFade]}
          >
            {array.map((slide: any, I: any) => (
              <SwiperSlide key={I} className="h-full w-full">
                <Image
                  alt="heroimage"
                  src={slide.image}
                  height={0}
                  width={0}
                  placeholder="blur"
                  sizes="100vw"
                  loading="lazy"
                  className=" aspect-auto object-top object-cover h-full w-full brightness-90"
                />
              </SwiperSlide>
            ))}
            <div className="bg-white absolute z-[20000000000] w-full bottom-0 left-0 flex justify-center pt-4">
              <SwiperbuttonHighlight className="flex" />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default WeeklyHighlightSlider;
