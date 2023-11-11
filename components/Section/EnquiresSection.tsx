import React from "react";
import { EnquiresForm } from "../ui/EnquiresForm";

type Props = {};

const EnquiresSection = (props: Props) => {
  return (
    <section className="py-10">
      <div className="max-lg:px-4 md:w-[80%] mx-auto  flex flex-col gap-y-6 ">
        <h1 className="text-3xl font-bold leading-[38.6px] text-texts text-center max-lg:mx-auto ">
          Want to make enquires?
        </h1>

        <p className="text-base text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam,
          impedit. Nihil sit eum impedit delectus earum itaque
        </p>

        <EnquiresForm />
      </div>
    </section>
  );
};

export default EnquiresSection;
