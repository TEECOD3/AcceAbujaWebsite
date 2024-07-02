import Image, { StaticImageData } from "next/image";
import React from "react";
import president from "../../public/president.jpg";
import { trace } from "console";

type Props = {
  team: TeamMember;
};

const OurTeamItem = (props: Props) => {
  const { team } = props;
  return (
    <>
      <div className="flex flex-col items-center">
        <figure className=" h-[250px]  w-[250px] relative md:h-[270px] md:w-[270px] overflow-hidden flex items-center justify-center rounded-full">
          <Image
            src={team.image.url}
            alt={team.image.alt}
            {...(team.image.blurdataUrl && {
              placeholder: "blur",
              blurDataURL: team.image.blurdataUrl,
            })}
            fill
            className="h-full w-full object-cover object-top"
          />
        </figure>

        <figcaption className="flex flex-col gap-y-2 mt-4 items-center ">
          <p className="font-semibold text-xl capitalize">{team.title}</p>
          <p>{team.position}</p>
        </figcaption>
      </div>
    </>
  );
};

export default OurTeamItem;
