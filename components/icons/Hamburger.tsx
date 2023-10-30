import * as React from "react";
const Hamburger = ({ className }: { className: string }) => (
  <svg
    width={29}
    height={21}
    className={className}
    viewBox="0 0 29 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.97.552h10a2 2 0 1 1 0 4h-10a2 2 0 0 1 0-4Zm14 16h10a2 2 0 1 1 0 4h-10a2 2 0 0 1 0-4Zm-14-8h24a2 2 0 1 1 0 4h-24a2 2 0 1 1 0-4Z"
      fill="#fff"
    />
  </svg>
);
export default Hamburger;
