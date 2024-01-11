import AboutSchool from "@/components/Home/AboutSchool";
import GradeLevels from "@/components/Home/GradeLevels";
import HeadSection from "@/components/Home/HeadSection";
import Highlights from "@/components/Home/Highlights";
import { InfiniteMovingCards } from "@/components/Home/InspiringSection";
import HomeSlider from "@/components/Home/HomeSlider";
import EnquiresSection from "@/components/Home/EnquiresSection";
import MissionVision from "@/components/Home/MissionVision";
import OurTeam from "@/components/Home/Our-Team";
import AffiliatedCompanies from "@/components/Home/Affiliates-Companies";
import LetsGrow from "@/components/Home/LetsGrow";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <HomeSlider />
      <HeadSection />
      <AboutSchool />
      <LetsGrow />
      <GradeLevels />
      <InfiniteMovingCards />
      <MissionVision />
      <Highlights />
      <OurTeam />
      <EnquiresSection />
      <AffiliatedCompanies />
    </main>
  );
}
