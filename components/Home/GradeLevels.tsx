import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import image3 from "../../public/LatestImage/SECONDARYSTUDENT.,..jpg";
import image1 from "../../public/cutekids.jpg";
import image2 from "../../public/LatestImage/primaryschoolstud.jpg";
import image4 from "../../public/LatestImage/Adudlt.jpg";
import GradeschoolTab from "../ui/GradeschoolTab";

const tabsdata = [
  {
    id: 1,
    tabsvalue: {
      name: "NURSERY",
      ageGrade: "Starting at age 3",
      about:
        "Early Years Foundation stage comprises Nursery 1, Nursery2 and Reception classes, starting at age 3. Here, learning is completely experiential in abeautifully equipped, technological and resource-filled environment",
      image: image1,
    },
  },
  {
    id: 2,
    tabsvalue: {
      name: "PRIMARY",
      ageGrade: "Comprises year 1 - 6",
      about:
        "Primary comprises Year 1-6, offering British Curriculum delivered through athematic based approach capturing religious/cultural perspectives.",
      image: image2,
    },
  },
  {
    id: 3,
    tabsvalue: {
      name: "SECONDARY",
      ageGrade: "starts at age 11 and spans Years 7-12",
      about:
        "Secondary starts at age 11 and spans Years 7-12. Our curriculum covers Nigerian National Curriculum, Standard Islamic Curriculum and Cambridge International Curriculum.",
      image: image3,
    },
  },
  {
    id: 4,
    tabsvalue: {
      name: "ATIP",
      ageGrade: "Adults and Children",
      about:
        "Al-Ansar Tahfeez and Islamic Studies Program is a unique program targeted at imparting deep Islamic and Arabic Language education. It is designated to provide intensive classes for children and adults within and outside the school community",
      image: image4,
    },
  },
];

type TgradlevelsProps = {
  data: GradeLevel[];
};

const GradeLevels = (props: TgradlevelsProps) => {
  const { data } = props;
  return (
    <>
      <div className="w-full flex items-center justify-center py-4 lg:py-6 mt-24  lg:mt-8 relative">
        <h3 className="text-3xl font-bold leading-[38.6px] capitalize text-texts">
          grade levels
        </h3>
      </div>

      <Tabs
        defaultValue={data[0].Tabtitle}
        className="max-lg:px-3 lg:w-[80%] mx-auto mt-8 mb-20 "
      >
        <TabsList className="grid lg:w-[80%] mx-auto grid-cols-4 space-x-1 lg:space-x-4 !bg-transparent">
          {data.map((tabs) => (
            <TabsTrigger
              key={tabs.Tabtitle}
              value={tabs.Tabtitle}
              className="font-bold text-[9px] lg:text-[14px] uppercase break-words rounded-none text-orange-400 px-2 py-2 lg:py-4 bg-[#F38120]/20  "
            >
              {tabs.Tabtitle}
            </TabsTrigger>
          ))}
        </TabsList>
        {data.map((tab) => (
          <TabsContent value={tab.Tabtitle} key={tab.Tabtitle} className="mt-5">
            <GradeschoolTab gradetype={tab} />
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};

export default GradeLevels;
