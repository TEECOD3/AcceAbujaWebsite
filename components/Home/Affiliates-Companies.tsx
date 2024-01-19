import React from "react";
import AcceLogo from "../icons/AcceIcons";
import company1 from "../../public/logo/acc900.jpeg";
import company2 from "../../public/logo/acce00.jpeg";
import company3 from "../../public/logo/acce0003.jpeg";
import company4 from "../../public/logo/acce20.jpeg";
import company5 from "../../public/logo/acce9220.jpeg";
import company6 from "../../public/logo/accelog2.jpeg";
import company7 from "../../public/logo/accelog3.jpeg";
import company9 from "../../public/logo/accelog4.jpeg";
import company10 from "../../public/logo/accelog5.jpeg";
import company11 from "../../public/logo/accelog6.jpeg";
import company12 from "../../public/logo/accelog7.jpeg";
import company13 from "../../public/logo/accelogo.jpeg";
import Image from "next/image";

const companies = [
  { name: "Acholiland Security", image: company1 },
  { name: "Acholiland Security", image: company2 },
  { name: "Acholiland Security", image: company3 },
  { name: "Acholiland Security", image: company4 },
  { name: "Acholiland Security", image: company5 },
  { name: "Acholiland Security", image: company6 },
  { name: "Acholiland Security", image: company7 },
  { name: "Acholiland Security", image: company9 },
  { name: "Acholiland Security", image: company10 },
  { name: "Acholiland Security", image: company11 },
  { name: "Acholiland Security", image: company12 },
  { name: "Acholiland Security", image: company13 },
];

type Props = {};

const AffiliatedCompanies = (props: Props) => {
  return (
    <section className="  bg-[#f7f7f7] flex items-center justify-center flex-col gap-8 lg:gap-y-10  lg:px-0 py-20">
      <div className="flex flex-wrap items-center justify-center w-full capitalize">
        <h1 className=" text-2xl lg:text-4xl font-bold text-texts">
          affliated companies
        </h1>
      </div>
      <div className="flex flex-col-reverse gap-8 lg:gap-y-10  lg:flex-col w-full max-lg:px-5">
        <div className="w-full lg:w-[80%] mx-auto  flex flex-wrap justify-between gap-y-4 lg:gap-8">
          {/* <AcceLogo className="h-28 w-28" />
          <AcceLogo className="h-28 w-28" />
          <AcceLogo className="h-28 w-28" />
          <AcceLogo className="h-28 w-28" />
          <AcceLogo className="h-28 w-28" /> */}
          {companies.slice(0, 5).map((company, idx) => (
            <div className="relative h-28 w-28" key={idx}>
              <Image
                src={company.image}
                alt="companylogo"
                className="h-full w-full object-cover"
                fill
                loading="eager"
              />
            </div>
          ))}
        </div>
        <div className="w-full lg:w-[80%] mx-auto flex flex-wrap justify-between  lg:gap-8 place-items-center gap-y-4">
          {/* <AcceLogo className="h-28 w-28" />
          <AcceLogo className="h-28 w-28" />
          <AcceLogo className="h-28 w-28" />
          <AcceLogo className="h-28 w-28" /> */}
          {companies.slice(6, 13).map((company, idx) => (
            <div className="relative h-28 w-28" key={idx}>
              <Image
                src={company.image}
                alt="companylogo"
                className="h-full w-full object-cover"
                fill
                loading="eager"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliatedCompanies;
