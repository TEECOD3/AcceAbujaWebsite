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
      <div className="flex flex-col-reverse gap-4 lg:gap-y-10  lg:flex-col w-full max-lg:px-5">
        <div className="w-full lg:w-[50%] mx-auto  flex flex-wrap justify-between gap-y-4 lg:gap-4">
          {data.map((company, idx) => (
            <div className="relative h-28 w-28 bg-white" key={idx}>
              <Image
                src={company.companylogo.url}
                alt={company.companylogo.alt}
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
