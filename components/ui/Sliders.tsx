"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import slide_image_1 from "../../public/img_1.jpg";
import slide_image_2 from "../../public/img_2.jpg";
import slide_image_3 from "../../public/img_3.jpg";
import slide_image_5 from "../../public/img_5.jpg";
import slide_image_4 from "../../public/img_5.jpg";
import Image from "next/image";
import { cn } from "@/lib/utils";

const images = [
  slide_image_1,
  slide_image_2,
  slide_image_3,
  slide_image_4,
  slide_image_5,
];

type Props = {};

const Sliders = (props: Props) => {
  const [slideindex, setslideindex] = useState(0);
  const settings = {
    className: "w-full",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    adaptiveHeight: true,
    centerPadding: "60px",
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    beforeChange: (current: number, next: number) => setslideindex(next),
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <div className="w-full h-[300px]  lg:h-[400px] flex items-center justify-center mx-0 my-4 px-0 py-5 ">
        <Slider {...settings}>
          {images.map((image, idx) => (
            <div
              className={cn(
                `cursor-pointer mx-4 mt-0 shadow-xl ${
                  idx === slideindex
                    ? "z-[100000000000000000] scale-[1.26] rounded-xl lg:scale-[2] w-[90%] mx-auto h-[300px] lg:w-[800px] lg:h-[506px]"
                    : "-z-[2] w-[160px] lg:w-[1000px] h-[200px] relative lg:h-[400px] pointer-events-none  mr-10 mt-8 "
                }`
              )}
              key={idx}
            >
              <Image
                src={image}
                alt="sliderimage"
                className={cn(
                  `lg:h-full w-full object-cover rounded-sm ${
                    idx === slideindex && "shadow-xl"
                  }`
                )}
              />
              {idx !== slideindex && (
                <div
                  className={cn(
                    `absolute top-0 left-0 h-full w-full bg-white/80`
                  )}
                ></div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
