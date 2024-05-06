"use client";
import { accePeople } from "@/components/Home/InspiringSection";
import HighlightBox from "@/components/ui/HighlightBox";
import Inspirationboxs from "@/components/ui/Inspirationboxs";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const InspiringPage = (props: Props) => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl  mt-10 text-center">
        <h1 className="capitalize text-4xl font-bold">inspiring stories</h1>
        <p className=" max-lg:px-6 lg:w-3/4 mx-auto mt-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia illum
          incidunt eligendi nobis sit. Sint totam voluptas, praesentium itaque
          eius ad molestiae iusto rerum quia delectus temporibus quaerat quas
          commodi.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 mt-10 max-w-7xl max-lg:w-[80%] gap-x-4  mx-auto gap-y-8">
        {accePeople.map((person, i) => (
          <Inspirationboxs key={i} persondets={person} />
        ))}
      </div>
      <div className=" mt-10 max-w-7xl mx-auto max-lg:w-[80%] flex items-center justify-center ">
        <Button className="w-8/12 bg-orange-400 capitalize mx-auto rounded-none font-bold text-xl">
          load more
        </Button>
      </div>
    </section>
  );
};

export default InspiringPage;
