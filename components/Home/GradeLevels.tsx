import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GradeschoolTab from "../ui/GradeschoolTab";
import image1 from "../../public/cutekids.jpg";
import image2 from "../../public/cuterkids.jpg";
import image3 from "../../public/childwithtestingtool.jpg";

const tabsdata = [
  {
    id: 1,
    tabsvalue: {
      name: "nusery section",
      ageGrade: "11-12 years",
      about:
        "We have a well-established Nursery, which caters for children aged 3 to 5 years. The welcoming and stimulating environ ensures children are always happy away from home. The experience and expertise are of the highest quality and we provide the best quality child care",
      image: image1,
    },
  },
  {
    id: 2,
    tabsvalue: {
      name: "primary section",
      ageGrade: "6-11 years",
      about:
        "The Primary School consists of Grade 1 to 5. Our main focus at this level is to give 21st Century education to all Pupils and at the same time seek to develop reasoning skills, problem-solving ability and creative thinking in them. It is at this level they will be introduced to basic skills in technology and computing",
      image: image2,
    },
  },
  {
    id: 3,
    tabsvalue: {
      name: "junior school",
      ageGrade: "11-14 years",
      about:
        "Our Secondary school consists of JSS1 —JSS3. Our main focus in addition to classroom learning is to build character, nurture values, and raise literate, confident, and engaged citizens who can think critically to develop their religion and societies.",
      image: image3,
    },
  },
  {
    id: 4,
    tabsvalue: {
      name: "Senior school",
      ageGrade: "11-14 years",
      about:
        "Our Secondary school consists of JSS1 —JSS3. Our main focus in addition to classroom learning is to build character, nurture values, and raise literate, confident, and engaged citizens who can think critically to develop their religion and societies.",
      image: image1,
    },
  },
];

type Props = {};

const GradeLevels = (props: Props) => {
  return (
    <>
      <div className="w-full flex items-center justify-center py-4 lg:py-6 mt-24  lg:mt-8 relative">
        <h3 className="text-3xl font-bold leading-[38.6px] capitalize text-texts">
          grade levels
        </h3>
      </div>

      <Tabs
        defaultValue={tabsdata[0].tabsvalue.name}
        className="max-lg:px-3 lg:w-[80%] mx-auto mt-8 mb-20 "
      >
        <TabsList className="grid lg:w-[80%] mx-auto grid-cols-4 space-x-1 lg:space-x-4 !bg-transparent">
          {tabsdata.map((tabs) => (
            <TabsTrigger
              key={tabs.id}
              value={tabs.tabsvalue.name}
              className="font-bold text-[9px] lg:text-[14px] uppercase rounded-none text-orange-400 px-2 py-2 lg:py-4 bg-[#F38120]/20  "
            >
              {tabs.tabsvalue.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsdata.map((tab) => (
          <TabsContent value={tab.tabsvalue.name} key={tab.id} className="mt-5">
            <GradeschoolTab gradetype={tab.tabsvalue} />
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};

export default GradeLevels;
