import { VacancyForm } from "@/components/ui/VacancyForm";
import React from "react";

type Props = {};

const Vacancy = (props: Props) => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl  mt-10 text-center ">
        <h1 className="capitalize text-4xl font-bold">
          application for vacancy
        </h1>
        <p className=" max-lg:px-6 lg:w-3/4 mx-auto mt-10">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia illum
          incidunt eligendi nobis sit. Sint totam voluptas, praesentium itaque
          eius ad molestiae iusto rerum quia delectus temporibus quaerat quas
          commodi.
        </p>
      </div>

      <div className=" my-16 lg:w-3/4 mx-auto max-lg:w-[80%]">
        <VacancyForm />
      </div>
    </section>
  );
};

export default Vacancy;
