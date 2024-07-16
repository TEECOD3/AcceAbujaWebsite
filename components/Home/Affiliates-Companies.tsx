import React from "react";
import AcceLogo from "../icons/AcceIcons";
import company3 from "../../public/logo/acce0003.jpeg";
import company6 from "../../public/logo/accelog2.jpeg";
import company7 from "../../public/logo/accelog3.jpeg";
import company13 from "../../public/logo/accelogo.jpeg";
import Image from "next/image";

const companies = [
  { name: "Acholiland Security", image: company3 },
  { name: "Acholiland Security", image: company6 },
  { name: "Acholiland Security", image: company7 },

  { name: "Acholiland Security", image: company13 },
];

type Props = {
  data: AffiliateCompany[];
};

const AffiliatedCompanies = (props: Props) => {
  const { data } = props;
  return (
    <section className="  bg-[#f7f7f7] flex items-center justify-center flex-col gap-8 lg:gap-y-10  lg:px-0 py-20">
      <div className="flex flex-wrap items-center justify-center w-full capitalize">
        <h1 className=" text-2xl lg:text-4xl font-bold text-texts">
          affliated companies
        </h1>
      </div>
      <div className="">
        <div className="w-full lg:w-[30%] mx-auto  place-content-center grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.map((company, idx) => (
            <Image
              src={company.companylogo.url}
              alt={company.companylogo.alt}
              key={idx}
              className="h-full w-full object-cover sm:size-32"
              height={70}
              width={70}
              loading="eager"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliatedCompanies;
