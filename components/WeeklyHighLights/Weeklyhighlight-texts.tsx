import React from "react";

type Props = {
  data: {
    id: number;
    image: string;
    title: string;
    summary: string;
    body: string;
    author: string;
    create_at: string;
  };
};

const Weeklyhighlighttexts = (props: Props) => {
  const { data } = props;
  return (
    <section className="w-full pb-10 max-[400px]:mt-28 min-[400px]:-mt-[3rem] min-[500px]:mt-20 sm:mt-10 md:mt-2  lg:-mt-10 xl:mt-0 ">
      <div className=" w-[80%] mx-auto flex  flex-col gap-y-3 max-sm:w-[90%] py-20">
        <h2 className="font-bold text-xl lg:text-5xl uppercase ">
          {data.title}
        </h2>
        <div className="flex gap-x-3 text-sm font-semibold">
          <span>{data.create_at}</span>
          <span>{data.author}</span>
        </div>
        <p className="mt-8">{data.body}</p>
      </div>
    </section>
  );
};

export default Weeklyhighlighttexts;
