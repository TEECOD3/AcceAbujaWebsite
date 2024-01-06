import React from "react";
import AcceLogo from "../icons/AcceIcons";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-[#f38120] to-90% font-medium">
      <div className="max-lg:px-4 md:w-[80%] mx-auto  ">
        <div className="flex flex-col lg:flex-row justify-between py-10 ">
          <div className=" w-full lg:w-[40%]">
            <AcceLogo className="h-20 w-20 lg:h-28 lg:w-28" />
          </div>

          <div className="flex text-white mt-8 flex-1 justify-between flex-wrap">
            <ul className="space-y-2">
              <h1 className="font-bold  text-xl mb-3 uppercase">company</h1>
              <li>About us</li>
              <li>Become a Member</li>
              <li>Referral Program</li>
              <li>Contact us</li>
            </ul>
            <ul className="space-y-2">
              <h1 className="font-bold  text-xl mb-3 uppercase">
                registration
              </h1>
              <li>About us</li>
              <li>Become a Member</li>
              <li>Referral Program</li>
              <li>Contact us</li>
            </ul>
            <ul className="space-y-2">
              <h1 className="font-bold text-xl mb-3 uppercase max-sm:mt-8">
                contacts
              </h1>
              <li>About us</li>
              <li>Become a Member</li>
              <li>Referral Program</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>

        <div className="w-full border-t border-t-white py-4 lg:py-10 flex justify-between flex-col lg:flex-row text-white">
          <p>All right reserved 2023</p>

          <ul className=" max-lg:gap-y-4 lg:justify-between lg:items-center flex flex-col lg:flex-row max-md:mt-8 gap-x-4">
            <li>End user privacy policy</li>
            <li>privacy policy</li>
            <li>cookies policies</li>
            <li>terms and conditions</li>
            <li>DPA</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
