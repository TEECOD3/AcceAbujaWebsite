import Image, { StaticImageData } from "next/image";
import React, { Suspense } from "react";
import teamimage from "@/public/president.jpg";
import MarkdownRenderer from "./markdownrenderer";

type Props = {
  name: string;
  position: string;
  description: string;
  image: string;
};

const ExecutiveTeamItem = (props: Props) => {
  const { description, image, name, position } = props;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[10rem_1fr] gap-x-9 mt-10 place-content-center max-lg:text-center gap-y-4">
      <div className="relative h-[150px] w-[150px] rounded-full overflow-hidden max-lg:mx-auto">
        <Image
          src={image || teamimage}
          alt="team member image"
          fill
          className="absolute h-full w-full object-cover object-top"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcu3dBPQAG9AKbbOGjiQAAAABJRU5ErkJggg=="
        />
      </div>

      <div className="space-y-2">
        <h4 className="font-semibold uppercase text-base">{name || "name"}</h4>
        <h4 className="font-semibold  text-sm capitalize">
          {position || "position"}
        </h4>
        <Suspense fallback={<div>loading...</div>}>
          <MarkdownRenderer filePath={description} />
        </Suspense>
      </div>
    </div>
  );
};

export default ExecutiveTeamItem;
