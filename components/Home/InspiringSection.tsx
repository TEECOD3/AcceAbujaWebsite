// "use client";

// import { cn } from "@/lib/utils";
// import React, { useEffect, useState } from "react";
// import { Button } from "../ui/button";

// type Props = {};

// const InspiringSection = (props: Props) => {
//   return (
//     <section className="w-[80%] mx-auto mt-8">
//       <div className="flex justify-between max-lg:justify-center  ">
//         <div className="">
//           <h2 className="text-texts text-3xl font-bold tracking-tight max-lg:text-center max-lg:my-8">
//             Inspiring stories
//           </h2>
//         </div>
//         <div className="hidden lg:block">
//           <Button className="w-56  bg-orange-500 rounded-none text-white py-4 px-2 uppercase">
//             see all testimonies
//           </Button>
//         </div>
//       </div>

//       <div className="flex mt-5 gap-x-5  overflow-x-scroll items-center  scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-100">
//         <Inspirationboxs />
//         <Inspirationboxs />
//         <Inspirationboxs />
//         <Inspirationboxs />
//       </div>
//     </section>
//   );
// };

// export default InspiringSection;

"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import logo from "../../public/image2.png";
import Inspirationboxs from "../ui/Inspirationboxs";
import { useRouter } from "next/navigation";
export const InfiniteMovingCards = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const Router = useRouter();

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <section className="relative h-[70vh] lg:h-[85dvh]">
      <Image
        src={logo}
        alt="watermark logo"
        fill
        className="h-full w-full bg-fixed object-cover"
      />
      <div className="flex justify-between max-lg:justify-center max-md:px-4   lg:w-[80%] mx-auto relative">
        <div className="">
          <h2 className="text-texts text-3xl font-bold tracking-tight max-lg:text-center max-lg:my-8">
            Inspiring stories
          </h2>
        </div>
        <div className="hidden lg:block">
          <Button
            className="w-56  bg-orange-500 rounded-none text-white py-4 px-2 uppercase"
            onClick={() => Router.push("/InspiringStories")}
          >
            see all testimonies
          </Button>
        </div>
      </div>
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20  mx-auto lg:mt-16 lg:w-[80%] overflow-hidden mb-28 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
            start && "animate-scroll ",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          <Inspirationboxs />
          <Inspirationboxs />
          <Inspirationboxs />
          <Inspirationboxs />
          <Inspirationboxs />
          <Inspirationboxs />
        </ul>

        <div className=" lg:hidden flex items-center justify-center mt-5">
          <Button
            className="w-56 mx-auto bg-orange-500 rounded-none text-white py-4 px-2 uppercase"
            onClick={() => Router.push("/InspiringStories")}
          >
            see all testimonies
          </Button>
        </div>
      </div>
    </section>
  );
};
