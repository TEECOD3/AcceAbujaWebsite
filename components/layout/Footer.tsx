import React from "react";
import AcceLogo from "../icons/AcceIcons";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gradient-to-r from-[#fac61b] py-8 from-10% via-[#f39f20] via-30% to-[#f38120] to-90%">
      <div className="max-lg:px-4 md:w-[80%] mx-auto  ">
        <div className="flex flex-col lg:flex-row justify-between py-10 ">
          <div className=" w-full lg:w-[40%]">
            <AcceLogo className="h-20 w-20 lg:h-28 lg:w-28" />
          </div>

          <div className="flex text-white mt-8 flex-1 justify-between flex-wrap">
            <ul className="space-y-2">
              <h1 className="font-medium  text-xl mb-3 uppercase">company</h1>
              <li>About us</li>
              <li>Become a Member</li>
              <li>Referral Program</li>
              <li>Contact us</li>
            </ul>
            <ul className="space-y-2">
              <h1 className="font-medium   text-xl mb-3 uppercase">
                registration
              </h1>
              <li>About us</li>
              <li>Become a Member</li>
              <li>Referral Program</li>
              <li>Contact us</li>
            </ul>
            <ul className="space-y-2">
              <h1 className="font-medium  text-xl mb-3 uppercase max-sm:mt-8">
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
          <p>all right reserved 2023</p>

          <ul className=" lg:justify-between lg:items-center flex flex-col lg:flex-row max-md:mt-8 ">
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
