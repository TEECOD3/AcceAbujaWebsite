"use client";
import { testimoonials } from "@/components/ui/BrandCoreSlider";
// import ClientButton from "@/components/ui/ClientButton";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <section className="">
      <div className="w-full h-[400px] lg:h-[600px] relative">
        <Image
          src="/image/AboutUsImage.jpg"
          alt="Hands on deck"
          loading="lazy"
          fill
          className="object-cover object-center w-full h-full transition-all duration-1000 ease-out"
        />

        <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-black/20">
          <p className="text-3xl font-bold text-white uppercase  lg:text-8xl">
            About us
          </p>
        </div>
      </div>

      <section className="my-10 mx-auto  max-lg:px-5 lg:w-[80%] ">
        <h1 className="mb-2 text-2xl font-bold uppercase  lg:text-3xl">
          Brief history
        </h1>

        <div className="space-y-6">
          <p>
            ACCE was established in 2019. Our aspiration is to provide the
            highest quality of education in a safe and Islamic environment, and
            to encourage excellence in academics and moral development in order
            to give our pupils the opportunity to reach their full potential. We
            hope to set a strong foundation for our future generations, Insha
            Allah You are welcome to our school We are pleased to welcome you
            and your child to Al-Ansar Centre for Comprehensive Education, here
            in Abuja, Nigeria.
          </p>
          <p>
            We are very proud of our school and the goals we have set out to
            achieve in helping our students fulfil their potential in attaining
            success in this dynamic world and in the hereafter, Insha Allah. We
            have a beautiful and comfortable environment to simplify learning
            for your child. We are confident your child will feel at home here
            at ACCE and we look forward to meeting you
          </p>
        </div>

        <div className="mt-10 space-y-6">
          <h2 className="text-xl font-bold uppercase  lg:text-2xl">
            Our mission statement
          </h2>
          <p>
            We commit ourselves to stimulating the intellectual, spiritual,
            moral, emotional and physical development of our pupils to bring the
            best out of them and to make them engineers of change in the society
            and make them upright citizens who fear Allah SWT in all their
            affairs
          </p>

          {/* <ClientButton
            href="/Vacancy"
            className="px-0 text-base font-bold uppercase  max-w-max"
            variant={"link"}
          >
            <span>Join us.</span> <ArrowRightIcon className="w-4 h-4 ml-2" />
          </ClientButton> */}
        </div>

        <div className="mt-10 space-y-6">
          <h2 className="text-xl font-bold uppercase  lg:text-2xl">
            Our Beliefs
          </h2>
          <ul>
            <ul className="flex flex-col gap-y-2">
              {testimoonials[1].description.map((des, i) => (
                <li className="capitalize" key={i}>
                  <p>- {des}</p>
                </li>
              ))}
            </ul>
          </ul>

          {/* <ClientButton
            href="/Vacancy"
            className="px-0 text-base font-bold uppercase  max-w-max"
            variant={"link"}
          >
            <span>Join us.</span> <ArrowRightIcon className="w-4 h-4 ml-2" />
          </ClientButton> */}
        </div>

        <div className="mt-10 space-y-6">
          <h2 className="text-xl font-bold uppercase  lg:text-2xl">
            Our Goals
          </h2>
          <ul>
            <ul className="flex flex-col gap-y-2">
              {testimoonials[2].description.map((des, i) => (
                <li className="capitalize" key={i}>
                  <p>- {des}</p>
                </li>
              ))}
            </ul>
          </ul>

          {/* <ClientButton
            href="/Vacancy"
            className="px-0 text-base font-bold uppercase  max-w-max"
            variant={"link"}
          >
            <span>Join us.</span> <ArrowRightIcon className="w-4 h-4 ml-2" />
          </ClientButton> */}
        </div>

        <div className="mt-10 space-y-6">
          <h2 className="text-xl font-bold uppercase  lg:text-2xl">
            Our core Values
          </h2>
          <ul>
            <ul className="flex flex-col gap-y-2">
              {testimoonials[3].description.map((des, i) => (
                <li className="capitalize" key={i}>
                  <p>- {des}</p>
                </li>
              ))}
            </ul>
          </ul>

          {/* <ClientButton
            href="/Vacancy"
            className="px-0 text-base font-bold uppercase  max-w-max"
            variant={"link"}
          >
            <span>Join us.</span> <ArrowRightIcon className="w-4 h-4 ml-2" />
          </ClientButton> */}
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
