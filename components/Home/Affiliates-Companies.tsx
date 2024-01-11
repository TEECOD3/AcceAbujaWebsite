import React from "react";
import AcceLogo from "../icons/AcceIcons";
import company1 from "../../public/image/al-achs.jpg";
import company2 from "../../public/image/al-fm.jpg";
import company3 from "../../public/image/al-foundation.jpg";
import company4 from "../../public/image/al-maiduguri.jpg";
import company5 from "../../public/image/al-nyanya.jpg";
import company6 from "../../public/image/al-security.jpg";
import company7 from "../../public/image/al-university.jpg";
import company8 from "../../public/image/al-hospital.jpg";

const companies = [
  { name: "Acholiland Security", image: company1 },
  { name: "Acholiland Security", image: company2 },
  { name: "Acholiland Security", image: company3 },
  { name: "Acholiland Security", image: company4 },
  { name: "Acholiland Security", image: company5 },
  { name: "Acholiland Security", image: company6 },
  { name: "Acholiland Security", image: company7 },
  { name: "Acholiland Security", image: company8 },
 
];

type Props = {};

const AffiliatedCompanies = (props: Props) => {
  return (
    <section className="  bg-[#FFF7F0] flex items-center justify-center flex-col gap-8 lg:gap-y-10  lg:px-0 py-20">
      <div className="flex flex-wrap items-center justify-center w-full capitalize">
        <h1 className=" text-2xl lg:text-4xl font-bold text-black">
          affliated companies
        </h1>
      </div>
      <div className="flex flex-col-reverse gap-8 lg:gap-y-10  lg:flex-col w-full">
        <div className="w-full lg:w-[80%] mx-auto  grid grid-cols-2 md:grid-cols-5 place-items-center gap-y-4 lg:gap-8">
          <AcceLogo className="h-28 w-28" />
          <AcceLogo className="h-28 w-28" />
          <AcceLogo className="h-28 w-28" />
          <AcceLogo className="h-28 w-28" />
          <AcceLogo className="h-28 w-28" />
        </div>
        <div className="w-full lg:w-[80%] mx-auto grid grid-cols-2 max-md:grid-rows-2 md:grid-cols-4 place-items-center gap-y-4 lg:gap-8">
          <AcceLogo className="h-28 w-28" />
          <AcceLogo className="h-28 w-28" />
          <AcceLogo className="h-28 w-28" />
          <AcceLogo className="h-28 w-28" />
        </div>
      </div>
    </section>
  );
};

export default AffiliatedCompanies;
