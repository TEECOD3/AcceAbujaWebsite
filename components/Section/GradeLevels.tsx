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
      <div className="w-full flex items-center justify-center py-4 lg:py-6">
        <h3 className="text-3xl font-bold leading-[38.6px] capitalize text-texts">
          grade levels
        </h3>
      </div>

      <Tabs
        defaultValue={tabsdata[0].tabsvalue}
        className="max-lg:px-3 lg:w-[80%] mx-auto mt-8 "
      >
        <TabsList className="grid lg:w-[80%] mx-auto grid-cols-4 space-x-1 lg:space-x-4 !bg-transparent">
          {tabsdata.map((tabs) => (
            <TabsTrigger
              key={tabs.id}
              value={tabs.tabsvalue}
              className="font-bold text-[9px] lg:text-base uppercase rounded-none text-orange-400 px-2 py-2 lg:py-4 bg-[#F38120]/20  "
            >
              {tabs.tabsvalue}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabsdata.map((tab) => (
          <TabsContent value={tab.tabsvalue} key={tab.id} className="mt-5">
            <GradeschoolTab gradetype={tab.tabsvalue} />
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};

export default GradeLevels;
