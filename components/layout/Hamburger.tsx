"use client";

type Props = {
  barstate?: boolean;
  barfunction: (barstate: boolean) => void;
  className?: string;
  bgclass?: string;
};

const Hamburger = (props: Props) => {
  const { barstate, barfunction, className } = props;
  return (
    <div
      className="flex flex-col items-end justify-center space-y-1 cursor-pointer "
      onClick={() => {
        barfunction(!barstate);
      }}
    >
      <span className="w-[35px] h-[4px] bg-white"></span>
      <span className="w-[50px] h-[4px] bg-white"></span>
    </div>
    // <div
    //   className={cn(
    //     `${
    //       barstate ? "bar active sticky z-40 overflow-y-none" : "bar"
    //     } flex flex-col items-center justify-center gap-y-2 ${className}`
    //   )}
    //   onClick={() => {
    //     barfunction(!barstate);
    //   }}
    // >
    //   <div className={cn(`line`)}></div>
    // </div>
  );
};

export default Hamburger;
