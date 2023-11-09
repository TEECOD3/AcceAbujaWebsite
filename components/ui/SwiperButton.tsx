import { useSwiper } from "swiper/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type swipperButtons = {
  className: string;
};

const SwiperButton = (props: swipperButtons) => {
  const { className } = props;
  const swiper = useSwiper();
  return (
    <div className={`${className} w-2/6 text-right space-x-6`}>
      <button
        onClick={() => swiper.slidePrev()}
        className="flex items-center justify-center font-semibold"
      >
        <BsChevronLeft className="text-black " />
        <span>Prev</span>
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="flex items-center justify-center font-semibold"
      >
        <span>Next</span>
        <BsChevronRight className="text-black" />
      </button>
    </div>
  );
};

export default SwiperButton;
