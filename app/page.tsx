import AboutSchool from "@/components/Home/AboutSchool";
import AffiliatedCompanies from "@/components/Home/Affiliates-Companies";
import EnquiresSection from "@/components/Home/EnquiresSection";
import GradeLevels from "@/components/Home/GradeLevels";
import HeadSection from "@/components/Home/HeadSection";
import Hero from "@/components/Home/Hero";
import HomeSlider from "@/components/Home/HomeSlider";
import LetsGrow from "@/components/Home/LetsGrow";
import { MissionVision } from "@/components/Home/MissionVision";

import OurTeam from "@/components/Home/Our-Team";
import { getheros } from "@/sanity/Queries/homepage";

export default async function Home() {
  const data: SchoolData = await getheros();
  const { Headertext, schoolname, herodescription, herosliders, founder } =
    data;

  console.log(founder.founderimage);

  return (
    <main className="">
      <Hero
        Headertext={Headertext}
        schoolname={schoolname}
        herodescription={herodescription}
      />
      <HomeSlider data={herosliders} />
      <HeadSection />
      <AboutSchool />
      <LetsGrow />
      <GradeLevels />
      <MissionVision />
      <OurTeam />
      <EnquiresSection />
      <AffiliatedCompanies />
    </main>
  );
}
