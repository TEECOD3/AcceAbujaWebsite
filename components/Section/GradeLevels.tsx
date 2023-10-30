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

const tabsdata = [
  {
    id: 1,
    tabsvalue: "early childhood",
  },
  {
    id: 2,
    tabsvalue: "lower school",
  },
  {
    id: 3,
    tabsvalue: "middle school",
  },
  {
    id: 4,
    tabsvalue: "upper school",
  },
];

type Props = {};

const GradeLevels = (props: Props) => {
  return (
    <>
      <div className="w-full flex items-center justify-center py-6">
        <h3 className="text-2xl font-bold leading-[38.6px] capitalize text-texts max-md:text-center max-lg:mx-auto">
          grade levels
        </h3>
      </div>

      <Tabs
        defaultValue={tabsdata[0].tabsvalue}
        className="px-3 lg:w-[80%] mx-auto "
      >
        <TabsList className="grid lg:w-[80%] mx-auto grid-cols-4 space-x-1 lg:space-x-3 !bg-transparent">
          {tabsdata.map((tabs) => (
            <TabsTrigger
              key={tabs.id}
              value={tabs.tabsvalue}
              className="capitalize font-bold text-[10px] lg:text-base text-orange-400 bg-[#F38120]/20  "
            >
              {tabs.tabsvalue}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsdata.map((tab) => (
          <TabsContent value={tab.tabsvalue} key={tab.id}>
            <GradeschoolTab gradetype={tab.tabsvalue} />
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};

export default GradeLevels;
