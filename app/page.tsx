import Reveal from "@/components/Animations/Reveal";
import AboutSchool from "@/components/Home/AboutSchool";
import AffiliatedCompanies from "@/components/Home/Affiliates-Companies";
import EnquiresSection from "@/components/Home/EnquiresSection";
import GradeLevels from "@/components/Home/GradeLevels";
import HeadSection from "@/components/Home/HeadSection";
import Hero from "@/components/Home/Hero";
import HomeSlider from "@/components/Home/HomeSlider";
import LetsGrow from "@/components/Home/LetsGrow";
import { MissionVision } from "@/components/Home/MissionVision";

import { getheros } from "@/sanity/Queries/homepage";

export default async function Home() {
  const data: SchoolData = await getheros();

  const {
    Headertext,
    schoolname,
    herodescription,
    herosliders,
    founder,
    whyjoinourschoolfields,
    letsgrowtogethersection,
    gradelevels,
    SchoolBrandcores,
    teamofexperts,
    affiliatecompany,
  } = data;

  return (
    <main className="">
      <Hero
        Headertext={Headertext}
        schoolname={schoolname}
        herodescription={herodescription}
      />
      <HomeSlider data={herosliders} />
      <Reveal>
        <HeadSection data={founder} />
      </Reveal>
      <Reveal>
        <AboutSchool data={whyjoinourschoolfields} />
      </Reveal>
      <Reveal>
        <LetsGrow data={letsgrowtogethersection} />
      </Reveal>
      <Reveal>
        <GradeLevels data={gradelevels} />
      </Reveal>
      <Reveal>
        <MissionVision data={SchoolBrandcores} />
      </Reveal>
      {/* <Reveal>
        <OurTeam data={teamofexperts} />
      </Reveal> */}
      <Reveal>
        <EnquiresSection />
      </Reveal>
      <Reveal>
        <AffiliatedCompanies data={affiliatecompany} />
      </Reveal>
    </main>
  );
}

export const revalidate = 60;
