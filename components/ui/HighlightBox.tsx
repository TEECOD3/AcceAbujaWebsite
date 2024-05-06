import Image, { StaticImageData } from "next/image";
import React from "react";
import ClientButton from "./ClientButton";

type Props = {
  id: number;
  title: string;
  image: string;
  slug: string;
  author: string;
  create_at: string;
  // summary: string;
};

const HighlightBox = (props: Props) => {
  const { image, author, create_at, slug, title, id } = props;
  return (
    <div className="mt-2 ">
      <div className="h-[250px] sm:h-[300px] w-full bg-black relative">
        <Image
          src={image}
          alt="highlightimages"
          fill
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col lg:w-[90%] gap-y-4 mx-auto ">
        <div className="text-texts text-base mt-3">
          By {author} {create_at}
        </div>
        <h1 className="text-xl lg:text-2xl font-bold ">{title}</h1>
        {/* <p className="text-texts  max-sm:text-base xtext-xs lg:text-base">
          {summary}
        </p> */}
        <ClientButton
          className="w-full bg-orange-500 rounded-none capitalize font-bold"
          href={`WeeklyHighlights/${slug}`}
        >
          read more
        </ClientButton>
      </div>
    </div>
  );
};

export default HighlightBox;
