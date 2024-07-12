import { testimoonials } from "@/components/ui/BrandCoreSlider";
import Image from "next/image";
import Aboutimage from "@/public/LatestImage/schoolcompound.jpg";
import { getAboutpage } from "@/sanity/Queries/About";
import { PortableText } from "@/sanity/Structure/PortableText";

const AboutUs = async () => {
  const data: AboutPage = await getAboutpage();
  const { Aboutherosection, Aboutcontent, title } = data;

  return (
    <section className="">
      <div className="w-full  h-[720px] lg:h-[700px] relative">
        <Image
          src={Aboutherosection?.image.url}
          alt={Aboutherosection?.image.alt}
          {...(Aboutherosection?.image.blurdataUrl && {
            placeholder: "blur",
            blurDataURL: Aboutherosection?.image.blurdataUrl,
          })}
          loading="lazy"
          fill
          className="object-cover object-center w-full h-full transition-all duration-1000 ease-out brightness-75"
        />

        <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-black/20">
          <p className="text-3xl font-bold text-white uppercase lg:text-8xl">
            {Aboutherosection?.shortimagetext}
          </p>
        </div>
      </div>

      <section className="my-10 mx-auto  max-lg:px-5 lg:w-[80%] prose max-w-7xl text-base lg:text-xl ">
        {Aboutcontent ? <PortableText value={Aboutcontent} /> : null}
      </section>
    </section>
  );
};

export default AboutUs;
