"use client";
import React from "react";
import AcceLogo from "../icons/AcceIcons";
import Link from "next/link";

type Props = {};

const linksprivacy = [
  {
    id: 1,
    linkName: "privacy policy",
    link: "/",
  },

  {
    id: 2,
    linkName: "terms of service",
    link: "/",
  },
  {
    id: 3,
    linkName: "website information",
    link: "/",
  },
  {
    id: 4,
    linkName: "disclaimer",
    link: "/",
  },
];

const linkscursory = [
  {
    id: 2,
    linkName: "About us",
    link: "/AboutUs",
  },
  {
    id: 3,
    linkName: "Founder Message",
    link: "/Founder",
  },
  {
    id: 4,
    linkName: "careers",
    link: "/WhyJoinUs",
  },
  // {
  //   id: 5,
  //   linkName: "weeklyHighlights",
  //   link: "/WeeklyHighLights",
  // },
  // {
  //   id: 6,
  //   linkName: "inspiring stories",
  //   link: "/InspiringStories",
  // },
  {
    id: 7,
    linkName: "vacancy",
    link: "/Vacancy",
  },
];
const Footer = (props: Props) => {
  return (
    <footer className="bg-[#f38120] to-90% font-medium mt-auto">
      <div className="max-lg:px-4 md:w-[80%] mx-auto  ">
        <div className="flex flex-col lg:flex-row justify-between py-10 ">
          <div className=" w-full lg:w-[40%]">
            <AcceLogo className="h-20 w-20 lg:h-28 lg:w-28" />
          </div>

          <div className="flex text-white mt-8 flex-1 justify-between flex-wrap">
            <ul className="space-y-6">
              <h1 className="font-bold text-base lg:text-xl mb-3 uppercase">
                Navigations
              </h1>
              {linkscursory.map((link) => (
                <Link
                  href={link.link}
                  key={link.id}
                  className="text-base font-semibold"
                >
                  <li className="capitalize hover:underline hover:underline-offset-2 mt-2">
                    {link.linkName}
                  </li>
                </Link>
              ))}
            </ul>
            <ul className="space-y-6 text-base">
              <h1 className="font-bold text-xl lg:text-xl mb-3 uppercase">
                Regulations
              </h1>
              {linksprivacy.map((link) => (
                <Link
                  href={link.link}
                  key={link.id}
                  className="font-semibold font-base "
                >
                  <li className="capitalize hover:underline hover:underline-offset-2 mt-2">
                    {link.linkName}
                  </li>
                </Link>
              ))}
            </ul>
            <ul className="space-y-2 text-base cursor-pointer ">
              <h1 className="font-bold text-xl mb-3 uppercase max-sm:mt-8 ">
                affiliate companies
              </h1>
              <li>Alaasu</li>
              <li>Alansar Foundation</li>
              <li>Acce Kano</li>
              <li>Al-AnsarHospital</li>
              <li>Al-aama</li>
              <li>Al-ansarRadio</li>
              <li>Al-ansarmasjid</li>
            </ul>
          </div>
        </div>

        <div className="w-full border-t border-t-white py-4 lg:py-10 flex justify-between flex-col lg:flex-row text-white">
          <p>All right reserved 2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
