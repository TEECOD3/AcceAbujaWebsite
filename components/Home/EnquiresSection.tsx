import React from "react";
import { EnquiresForm } from "../ui/EnquiresForm";

type Props = {};

const EnquiresSection = (props: Props) => {
  return (
    <section className="py-28 bg-gray-300/40" id="contact">
      <div className="max-lg:px-4 md:w-[80%] mx-auto  flex flex-col gap-y-6 ">
        <h1 className="text-3xl font-bold leading-[38.6px] text-texts text-center max-lg:mx-auto ">
          Want to make enquires?
        </h1>

        <p className="text-base text-center capitalize">
          reach out for more enquiries
        </p>

        <EnquiresForm />
      </div>
    </section>
  );
};

export default EnquiresSection;
