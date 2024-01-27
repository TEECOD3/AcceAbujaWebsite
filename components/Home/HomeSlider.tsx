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
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const images = [
  {
    id: 1,
    image: slide_image_1,
    description: [
      "We commit ourselves to stimulating the intellectual, spiritual, moral, emotional and physical development of our pupils to bring the best out of them and to make them engineers of change in the society and make them upright citizens who fear Allah SWT in all their affairs.",
    ],
    name: "Our Mission Statement",
  },
  {
    id: 1,
    image: slide_image_2,
    description:
      "Each student is a unique and valued individual whose self-esteem is enhanced by mutual respect between students and staff",

    name: "our Beliefs",
  },
  {
    id: 1,
    image: slide_image_3,
    description:
      "To build and maintain a culture of academic excellence, integrity, and citizenship",
    name: "our Goals",
  },
  {
    id: 1,
    image: slide_image_4,
    description:
      "At Al-Ansar, we endeavour to instil in our pupils the fear of Allah (SWT). Our overall code of conduct is guided by developing good moral character and inspiring our pupils to becomegood ambassadors of the society. Our core values are",
    name: "our core values",
  },
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
                src={image.image}
                alt="sliderimage"
                loading="lazy"
                placeholder="blur"
                className={cn(
                  `h-[400px] lg:h-[500px] w-full object-cover rounded-sm transition-all duration-1000 ease-out`
                )}
              />
              <div className="absolute top-0 left-0 h-full w-full bg-black/40 z-[10] text-white">
                <div className=" absolute bottom-10 left-8 lg:w-[80%]">
                  <p className="lg:leading-[44px] lg:text-5xl  text-3xl text-white capitalize mb-4 tracking-tight">
                    {image.name}
                  </p>
                  <p className="text-white  lg:w-3/4">{image.description}</p>
                  <Link
                    className="text-sm font-bold flex gap-x-2 items-center mt-3"
                    href={"/AboutUs"}
                  >
                    <span>Readmore</span> <ArrowRight className="h-4 w-4" />
                  </Link>
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
