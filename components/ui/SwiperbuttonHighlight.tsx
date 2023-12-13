import { useSwiper } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Arrowright from "../Arrowright";
import Arrowleft from "./Arrowleft";

type swipperButtons = {
  className: string;
};

const SwiperbuttonHighlight = (props: swipperButtons) => {
  const { className } = props;
  const swiper = useSwiper();
  return (
    <div className={`${className} w-2/6 text-right space-x-6`}>
      <button
        onClick={() => swiper.slidePrev()}
        className="flex items-center justify-center hover:border-black hover:border-[1px] font-semibold hover:scale-80 p-3 group rounded-full bg-black hover:bg-white transition-all duration-300 ease-in-out"
      >
        <Arrowleft className="text-white h-6 w-6 group-hover:text-black  transition-all ease-in-out duration-300" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="flex items-center justify-center hover:border-black hover:border-[1px] font-semibold hover:scale-80 p-3 group rounded-full bg-black hover:bg-white transition-all duration-300 ease-in-out"
      >
        <Arrowright className="text-white h-6 w-6 group-hover:text-black  transition-all ease-in-out duration-300" />
      </button>
    </div>
  );
};

export default SwiperbuttonHighlight;
