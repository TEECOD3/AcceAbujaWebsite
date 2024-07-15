import Image from "next/image";
import React from "react";
import founderImage from "../../public/image/president-removebg-preview.png";
import logo from "../../public/image2.png";
import ClientButton from "@/components/ui/ClientButton";

type Props = {};

const Founderpage = (props: Props) => {
  return (
    <>
      <section className="relative w-full h-[600px] lg:h-[700px] flex bg-white">
        <div className="absolute z-4 h-full w-full">
          <Image
            src={logo}
            alt="watermark logo"
            height={400}
            width={350}
            className="h-full w-full bg-fixed object-cover"
            priority
          />
        </div>
        <div className="lg:max-w-[80%] sm:w-[100%] xl:w-[60%] mx-auto relative flex gap-x-4  lg:flex-row justify-between items-center h-full">
          <div className=" sm:w-[40%] lg-w-1/2 max-md:hidden lg:block text-white max-sm:px-10 ">
            <div className=" bg-orange-500 h-[150px] w-[300px]  xl:w-[500px] outline outline-4 outline-offset-8 outline-orange-500">
              <div className="text-center uppercase flex flex-col items-center justify-center h-full w-full">
                <div className="lg:w-3/4 space-y-4">
                  <h1 className="text-base lg:text-xl">Founder</h1>
                  <p className="text-xl lg:text-2xl font-bold">
                    welcome message from the founder
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-full">
            <Image
              src={founderImage}
              alt="acce founder image"
              className="object-cover object-top h-[600px] w-full brightness-90"
              height={600}
              width={700}
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAdEAABBAIDAAAAAAAAAAAAAAABAAMEBQIGESJB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADETH/2gAMAwEAAhEDEQA/AJVtjdazqlBXTHQHo+HYA+8IiK1FXOQriQ5Gz//Z"
            />
          </div>
        </div>
      </section>

      <section className="mb-10 mt-10 w-[80%] mx-auto flex  flex-col gap-y-8 max-sm:w-[90%]  text-base">
        <div className=" space-y-2">
          <p className="text-xl lg:text-2xl font-bold text-orange-400 capitalize ">
            welcome message from the founder
          </p>
        </div>

        <p>
          I am tremendously proud to lead a dedicated and hardworking team. Our
          priority is our pupils and our society. My team and I will strive to
          provide the highest possible standard of education at all times for
          your child, Insha Allah. We discovered a lack of understanding of
          religion and its moral teachings in the Islamic youth today and we are
          poised to solve this problem. I am highly confident of the team we
          have on ground, their experience and dedication. I ask Allah to be our
          support and to help us achieve far beyond what you will be expecting
          as parents. At ACCE, we plan to equip our pupils with essential
          knowledge and skills for living a pious life in a 21st century world.
          Our energy is directed towards building in our pupils the confidence
          to study, understand and apply any subject they have learnt in real
          life situations, so that they graduate well-informed and can
          successfully and confidently follow whatever career path they choose
          in life. We will equally equip pupils with the knowledge of Deen;
          Quran memorization, Arabic, Adhkar, Tauheed, Fiqhu, Hadeeth, in a way
          they will have a good understanding of and apply to their daily life.
          Our main aim is to ensure that all our pupils study in a safe, secure
          and happy environment at the school and graduate appreciating their
          high level of achievement.
        </p>
        <p>
          We discovered a lack of understanding of religion and its moral
          teachings in the Islamic youth today and we are poised to solve this
          problem. I am highly confident of the team we have on ground, their
          experience and dedication. I ask Allah to be our support and to help
          us achieve far beyond what you will be expecting as parents. At ACCE,
          we plan to equip our pupils with essential knowledge and skills for
          living a pious life in a 21st century world. Our energy is directed
          towards building in our pupils the confidence to study, understand and
          apply any subject they have learnt in real life situations, so that
          they graduate well-informed and can successfully and confidently
          follow whatever career path they choose in life.
        </p>
        <p>
          We are also proud of our curriculum; It is broad, balanced and
          relevant to the needs of all our pupils. At the primary education
          stage, we deliver a formal broad education system, focusing on
          literacy and numeracy. We also introduce our pupils to a well-designed
          and comprehensive curriculum of Islamic Religious Knowledge and
          Information, Communication Technology (ICT)
        </p>
        <p>
          In our secondary school, we have in addition to our curriculum, a
          skills acquisition content. We believe the 21st century pupil deserves
          an all round experience and learning should extend beyond the
          classroom. These include the Al-Ansar Leadership Programme (ALP),
          Young Journalists, Qur’an Memorisation Masters, Train the Trainers
          Club (TTC), Young Farmers Club, STEM Club, Young Writers Club, The
          Duke of Edinburgh’s Award Scheme as well as numerous community based
          projects. These programmes open our pupils’ minds to new experiences,
          provide opportunities for them to work with professionals in their
          various fields of expertise and to ultimately develop leadership
          skills and qualities which are valued by universities, employers and
          the society
        </p>

        <p>
          We have zero tolerance for any form of mischief, such as exam
          malpractice, drug abuse, bullying etc. Lastly, our carefully selected
          team of Imams offer Islamic pastoral care to our pupils in order to
          help strengthen their Imaan and knowledge of the Deen in line with the
          teachings of the Qur’an and Sunnah. We look forward to receiving you
          and your child in ACCE, Abuja
        </p>

        <div className="flex flex-wrap items-center">
          <span>
            Read more about our goals , our values , our mission and our beliefs
          </span>{" "}
          <ClientButton
            className="text-orange-400 font-bold px-0 "
            href="/AboutUs"
            variant={"link"}
          >
            Here
          </ClientButton>
        </div>

        <div className="font-bold space-y-2">
          <em>Here&apos;s a wonderful year!</em>
          <p>Dr. M. K. Dikwa, mni</p>
        </div>
      </section>
    </>
  );
};

export default Founderpage;
