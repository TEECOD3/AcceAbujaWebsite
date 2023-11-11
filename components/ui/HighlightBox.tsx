import React from "react";

type Props = {};

const HighlightBox = (props: Props) => {
  return (
    <div className="mt-2 ">
      <div className="h-[250px] lg:h-[300px] w-full bg-black"></div>
      <div className="flex flex-col lg:w-[80%] gap-y-4 ">
        <div className="text-gray-500 text-base mt-3">
          By John Doe l Aug 23, 2021{" "}
        </div>
        <h1 className="text-xl lg:text-2xl font-bold ">
          A UX Case Study Creating a Studious Environment for Students:
        </h1>
        <p className="text-gray-500  max-sm:text-base xtext-xs lg:text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
          incidunt cumque doloribus repellendus sed saepe. Dolor reiciendis
          commodi ea debitis consequatur ipsa totam pariatur mollitia
          aspernatur! Necessitatibus iure suscipit autem!
        </p>
      </div>
    </div>
  );
};

export default HighlightBox;
