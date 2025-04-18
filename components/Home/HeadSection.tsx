import { PortableText } from "@/sanity/Structure/PortableText";
import Image from "next/image";
import ClientButton from "../ui/ClientButton";
import Reveal from "../Animations/Reveal";

type Props = {
  data: FounderSection;
};

const HeadSection = (props: Props) => {
  const { data } = props;

  return (
    <section className="bg-gray-300/40 pt-36 -mt-32">
      <div className="px-3 md:w-[90%] py-10 xl:w-[95%] mx-auto flex flex-col-reverse xl:flex-row">
        <div className="w-full flex items-center justify-center max-lg:mt-10">
          <div className="flex flex-col  max-xl:text-center xl:items-start justify-center gap-y-4 lg:gap-y-6 w-full lg:w-[70%] text-texts ">
            <Reveal>
              <p className="text-orange-500  text-[18px] uppercase ">
                {data?.foundersectiontitle}
              </p>
            </Reveal>
            <Reveal>
              <p className="font-bold max-md:text-center text-3xl leading-[38.4px] tracking-tight capitalize ">
                {data?.subtitle}
              </p>
            </Reveal>
            <Reveal>
              <p className="max-md:text-center text-base lg:text-xl prose mx-auto">
                {data?.summarymessage ? (
                  <PortableText value={data?.summarymessage} />
                ) : null}
              </p>
            </Reveal>

            <ClientButton
              href="/Founder"
              className=" uppercase max-xl:mx-auto w-2/4 py-6 bg-orange-400 max-w-max text-white  mt-10 rounded-none"
            >
              read more
            </ClientButton>
          </div>
        </div>
        <div className="w-full max-xl:mt-8">
          <div className=" mx-auto w-[80%] h-[400px] md:h-[600px] aspect-square lg:h-[684px] lg:w-[566px] relative ">
            <Image
              src={data?.founderimage?.url}
              alt={data?.founderimage.alt?.toLowerCase()?.replace(/ /g, "-")}
              loading="lazy"
              {...(data?.founderimage.blurdataUrl && {
                placeholder: "blur",
                blurDataURL: data?.founderimage.blurdataUrl,
              })}
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadSection;
