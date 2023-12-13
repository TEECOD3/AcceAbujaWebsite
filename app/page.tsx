import AboutSchool from "@/components/Section/AboutSchool";
import GradeLevels from "@/components/Section/GradeLevels";
import HeadSection from "@/components/Section/HeadSection";
import Highlights from "@/components/Section/Highlights";
import InspiringSection from "@/components/Section/InspiringSection";
import HomeSlider from "@/components/HomeSlider";
import EnquiresSection from "@/components/Section/EnquiresSection";
import MissionVision from "@/components/Section/MissionVision";
import OurTeam from "@/components/Section/Our-Team";
import AffiliatedCompanies from "@/components/Section/Affiliates-Companies";

export default function Home() {
  return (
    <main className="">
      <div className="w-full h-[40%] bg-gradient-to-r from-[#fac61b] from-10% via-[#f39f20] via-30% pt-16 pb-40 to-[#f38120] to-90% ">
        <div className="flex flex-col gap-y-2 lg:w-[50%] h-full mx-auto text-center items-center justify-center ">
          <p className="uppercase text-base text-white mb-2 font-semibold">
            Lorem ipsum dolor sit{" "}
          </p>
          <p className="max-md:leading-[44px] text-5xl font-semibold text-white capitalize mb-4">
            inspiring excellence
          </p>
          <p className="text-white font-semibold max-sm:px-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            accusamus quibusdam, assumenda iusto velit earum voluptas cupiditate
            officiis fuga dignissimos
          </p>
        </div>
      </div>
      <section className="w-full -mt-10">
        <HomeSlider />
      </section>

      <section className="">
        <HeadSection />
      </section>
      <section className="mt-24 lg:mt-10">
        <AboutSchool />
      </section>
      <section className="mt-8 lg:mt-10">
        <GradeLevels />
      </section>

      <section className="mt-10">
        <InspiringSection />
      </section>

      <section className="mt-10">
        <MissionVision />
      </section>
      <section className="">
        <Highlights />
      </section>

      <section className="">
        <OurTeam />
      </section>
      <section className="">
        <EnquiresSection />
      </section>
      <section className="">
        <AffiliatedCompanies />
      </section>
    </main>
  );
}
