"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

type Props = {};

export const testimoonials = [
  {
    id: 1,
    description: [
      "We commit ourselves to stimulating the intellectual, spiritual, moral, emotional and physical development of our pupils to bring the best out of them and to make them engineers of change in the society and make them upright citizens who fear Allah SWT in all their affairs.",
    ],
    name: "Our Mission Statement",
    position: "Marketing Manager",
  },
  {
    id: 2,
    description: [
      "All students are capable of learning",
      "A safe, secure, positive environment is essential for learning",
      "Each student is a unique and valued individual whose self-esteem is enhanced by mutual respect between students and staff",
      "Every child can reach their maximum potentia",
      "Students learn best when they are actively engaged in meaningful learning opportunities",
      "Lifelong healthy habits are vital in creating citizens who are physically, mentally and emotionally prepared for the future.",
      "Teachers and parents are critical partners in the educational process.Education is not just a pathway to opportunities but a prerequisite.",
    ],
    name: "our Beliefs",
    position: "Operations Director",
  },
  {
    id: 3,
    description: [
      "To build and maintain a culture of academic excellence, integrity, and citizenship",
      "To maintain a high standard of education",
      "To promote respect and tolerance towards others.",
      "To offer a wide range of relevant learning experiences in a positive and caring atmosphere. Instructions will provide for technological preparation of the students for an ever-changing world",
      "To equip students with the skills necessary to be successful in the global community.",
      "To provide for a safe and happy learning environment for children of diverse nationalities.",
      "To promote good morals and a high level of discipline.",
      "To instill self confidence in students.",
    ],
    name: "our Goals",
    position: "Operations Director",
  },
  {
    id: 4,
    description: [
      "At Al-Ansar, we endeavour to instil in our pupils the fear of Allah (SWT). Our overall code of conduct is guided by developing good moral character and inspiring our pupils to becomegood ambassadors of the society. Our core values are",
      "Fear of Allah",
      " Hard Work",
      "Integrity",
      "Tolerance",
      "Service",
      "Excellence",
    ],
    name: "our core values",
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
            delay: 3500,
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
  description: string[];
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
        <ul className="flex flex-col gap-y-2">
          {description.map((des, i) => (
            <li className="capitalize font-light  text-white text-sm" key={i}>
              <p>- {des}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
