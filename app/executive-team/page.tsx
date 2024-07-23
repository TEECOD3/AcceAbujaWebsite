import ExecutiveTeamItem from "@/components/executive-team-item";
import Aboutimage from "@/public/LatestImage/schoolcompound.jpg";
import Image from "next/image";

const page = async () => {
  return (
    <section className="">
      <div className="w-full h-96 lg:h-[700px] relative py-28">
        <Image
          src={Aboutimage}
          alt="team hero image"
          loading="lazy"
          fill
          className="object-cover object-center w-full h-full transition-all duration-1000 ease-out brightness-75"
        />
        <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-black/20">
          <p className="text-2xl font-bold text-white uppercase lg:text-6xl">
            senior management team
          </p>
        </div>
      </div>

      <section className="pb-20 max-w-5xl mx-auto space-y-16 container ">
        {Executiveteamdata.map((memberdata, memberidx) => (
          <ExecutiveTeamItem key={memberidx} {...memberdata} />
        ))}
      </section>
    </section>
  );
};

export default page;

const Executiveteamdata = [
  {
    name: "Mohammed Al-Rachid ",
    position: "head of school",
    description: "/md-files/head-of-sch-desc.md",
    image: "/HOS4.JPG",
  },
  {
    name: "Mohammed Al-Rachid ",
    position: "head of school",
    description: "/md-files/head-of-sch-desc.md",
    image: "/HOS4.JPG",
  },
  {
    name: "Mohammed Al-Rachid ",
    position: "head of school",
    description: "/md-files/head-of-sch-desc.md",
    image: "/HOS4.JPG",
  },
  {
    name: "Mohammed Al-Rachid ",
    position: "head of school",
    description: "/md-files/head-of-sch-desc.md",
    image: "/HOS4.JPG",
  },
];
