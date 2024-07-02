// import Image from "next/image";
// import { StickyScroll } from "../ui/Stickyscroll";
// import slide_image_1 from "@/public/image/gallery1.jpeg";
// import slide_image_2 from "@/public/LatestImage/qurangirl.jpg";
// import slide_image_3 from "@/public/LatestImage/cuteclass.jpg";
// import slide_image_5 from "@/public/LatestImage/primrystudent.jpg";
// import slide_image_4 from "@/public/LatestImage/computerclass.jpg";
// import { BackgroundBeams } from "../ui/BackgroundBeams";
// import { Spotlight } from "../ui/Spotlight";

// type Props = {};

// const MissionVision = (props: Props) => {
//   return (
//     <section className="relative  bg-black my-44 py-20 ">
//       {/* <div className="w-full lg:w-[80%] mx-auto mt-8 h-full flex justify-end lg:mr-[24%] relative z-[40]">
//         <div className="h-full w-full lg:w-[40%] bg-[#394360]/80">
//           <BrandcoreSlider />
//         </div>
//       </div> */}
//       <Spotlight
//         className="-top-40 left-0 md:left-60 md:-top-20"
//         fill="white"
//       />
//       <BackgroundBeams />
//       <StickyScroll content={content} />
//     </section>
//   );
// };
// const content = [
//   {
//     title: "Our Mission Statement",
//     description: [
//       "We commit ourselves to stimulating the intellectual, spiritual, moral, emotional and physical development of our pupils to bring the best out of them and to make them engineers of change in the society and make them upright citizens who fear Allah SWT in all their affairs.",
//     ],
//     content: (
//       <div className="h-full relative w-full  flex items-center justify-center text-white">
//         <Image
//           src={slide_image_1}
//           width={400}
//           height={400}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//         <div className="absolute top-0 left-0 h-full w-full bg-black/50 flex items-center justify-center text-white">
//           our Mission statement
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "our Beliefs",
//     description: [
//       "All students are capable of learning",
//       "A safe, secure, positive environment is essential for learning",
//       "Each student is a unique and valued individual whose self-esteem is enhanced by mutual respect between students and staff",
//       "Every child can reach their maximum potentia",
//       "Students learn best when they are actively engaged in meaningful learning opportunities",
//       "Lifelong healthy habits are vital in creating citizens who are physically, mentally and emotionally prepared for the future.",
//       "Teachers and parents are critical partners in the educational process.Education is not just a pathway to opportunities but a prerequisite.",
//     ],
//     content: (
//       <div className="h-full relative w-full  flex items-center justify-center text-white">
//         <Image
//           src={slide_image_2}
//           width={400}
//           height={400}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//         <div className="absolute top-0 left-0 h-full w-full bg-black/50 flex items-center justify-center text-white">
//           our Beliefs
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "our Goals",
//     description: [
//       "At Al-Ansar, we endeavour to instil in our pupils the fear of Allah (SWT). Our overall code of conduct is guided by developing good moral character and inspiring our pupils to becomegood ambassadors of the society. Our core values are",
//       "Fear of Allah",
//       " Hard Work",
//       "Integrity",
//       "Tolerance",
//       "Service",
//       "Excellence",
//     ],
//     content: (
//       <div className="h-full relative w-full  flex items-center justify-center text-white">
//         <Image
//           src={slide_image_3}
//           width={400}
//           height={400}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//         <div className="absolute top-0 left-0 h-full w-full bg-black/50 flex items-center justify-center text-white">
//           our Goals
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "our core values",
//     description: [
//       "At Al-Ansar, we endeavour to instil in our pupils the fear of Allah (SWT). Our overall code of conduct is guided by developing good moral character and inspiring our pupils to becomegood ambassadors of the society. Our core values are",
//       "Fear of Allah",
//       " Hard Work",
//       "Integrity",
//       "Tolerance",
//       "Service",
//       "Excellence",
//     ],
//     content: (
//       <div className="h-full relative w-full  flex items-center justify-center text-white">
//         <Image
//           src={slide_image_4}
//           width={400}
//           height={400}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//         <div className="absolute top-0 left-0 h-full w-full bg-black/50 flex items-center justify-center text-white">
//           our core values
//         </div>
//       </div>
//     ),
//   },
//   {
//     title: "our vision",
//     description: [
//       "To provide world-class education and prepare our pupils for success in this life and the next.",
//     ],
//     content: (
//       <div className="h-full relative w-full  flex items-center justify-center text-white">
//         <Image
//           src={slide_image_5}
//           width={400}
//           height={400}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//         <div className="absolute top-0 left-0 h-full w-full bg-black/50 flex items-center justify-center text-white">
//           our vision
//         </div>
//       </div>
//     ),
//   },
// ];

// export default MissionVision;

import React from "react";
import BrandcoreSlider from "../ui/BrandCoreSlider";
import Image from "next/image";
import image from "../../public/logo/SchoolImage.jpeg";

type Props = {
  data: SchoolBrandCore[];
};

export const MissionVision = (props: Props) => {
  const { data } = props;
  return (
    <section className="relative lg:h-[700px] bg-[#232323] my-44 ">
      <Image
        alt="school image"
        src={image}
        fill
        className="h-full w-full object-cover"
      />
      <div className="w-full lg:w-[80%] mx-auto mt-8 h-full flex justify-end lg:mr-[24%] relative z-[40]">
        <div className="h-full w-full lg:w-[40%] bg-[#394360]/80">
          <BrandcoreSlider data={data} />
        </div>
      </div>
    </section>
  );
};
