import Image from "next/image";
import React from "react";
import founderImage from "../../public/teacherimage.png";
import logo from "../../public/image2.png";
import ClientButton from "@/components/ui/ClientButton";

type Props = {};

const Founderpage = (props: Props) => {
  return (
    <>
      <section className="relative w-full  h-[600px] lg:h-[700px] flex bg-white">
        <div className="absolute z-4 h-full w-full">
          <Image
            src={logo}
            alt="watermark logo"
            fill
            className="h-full w-full bg-fixed object-cover"
          />
        </div>
        <div className="lg:max-w-[80%] md:w-[80%] mx-auto relative flex gap-x-4  lg:flex-row justify-between items-center h-full">
          <div className=" sm:w-[40%] lg-w-1/2 max-md:hidden lg:block text-white max-sm:px-10 ">
            <div className=" bg-orange-500 h-[150px] w-[300px]  lg:w-[500px] outline outline-4 outline-offset-8 outline-orange-500">
              <div className="text-center uppercase flex flex-col items-center justify-center h-full w-full">
                <div className="lg:w-3/4 space-y-4">
                  <h1 className="text-base lg:text-xl">principal</h1>
                  <p className="text-xl lg:text-2xl font-bold">
                    welcome message from our principal
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[600px] w-full lg:w-[600px] ">
            <Image
              src="/HOS.jpg"
              alt="acce founder image"
              className="object-cover object-top h-[600px] w-full brightness-90"
              height={600}
              width={1200}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAdEAABBAIDAAAAAAAAAAAAAAABAAMEBQIGESJB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADETH/2gAMAwEAAhEDEQA/AJVtjdazqlBXTHQHo+HYA+8IiK1FXOQriQ5Gz//Z"
            />
          </div>
        </div>
      </section>

      <section className="my-10 w-[80%] mx-auto flex  flex-col gap-y-8 max-sm:w-[90%]  text-base">
        <div className=" space-y-1">
          <p className="text-xl lg:text-2xl font-bold text-orange-400 capitalize ">
            welcome message from our principal
          </p>
        </div>
        <p>Dear Parents, Students, and Community Members,</p>
        <p>Assalamu Alaikum wa Rahmatullahi wa Barakatuh,</p>
        <p>
          It is with great pleasure and a profound sense of responsibility that
          I welcome you to Alansaar Center, an institution dedicated to
          nurturing our students&apos; academic and spiritual growth. At
          Alansaar, we strive to provide an enriching educational environment
          where Islamic values are at the heart of everything we do.
        </p>
        <p>
          As the Head of the School, I am honored to lead this vibrant
          community, dedicated to nurturing well-rounded individuals who are
          knowledgeable and deeply rooted in Islamic values. Our school is
          committed to excellence in education, fostering a love for learning,
          and instilling the principles of our faith in each student. We believe
          that a well-rounded education encompasses not only acquiring knowledge
          but also the development of character, ethics, and a sense of
          community.
        </p>
        <p>
          We are blessed with a team of dedicated and highly qualified educators
          who are passionate about their roles as mentors and guides. They work
          tirelessly to create a supportive and inclusive atmosphere where every
          student can thrive. Our curriculum is designed to challenge and
          inspire, ensuring that our students are well-prepared to meet the
          demands of an ever-changing world while remaining rooted in their
          Islamic identity.
        </p>
        <p>
          At Alansaar Center, we encourage our students to strive for excellence
          in all aspects of their lives, to be compassionate and respectful
          individuals, and to contribute positively to society. We offer a range
          of extracurricular activities, religious programs, and community
          service opportunities that complement our academic offerings and help
          students develop into well-rounded individuals.
        </p>
        <p>
          We are also deeply committed to fostering a strong partnership with
          parents and the wider community. Your involvement and support are
          crucial to the success of our students and the school as a whole.
          Together, we can create a nurturing and dynamic environment where our
          children can grow intellectually, spiritually, and morally.
        </p>

        <p>
          I invite you to explore our prospectus and learn more about what makes
          Alansaar Center a unique and vibrant place of learning. May Allah
          (SWT) bless our efforts and guide us in providing the best possible
          education for our children.
        </p>
        <p>Jazakum Allahu Khairan for your trust and support.</p>
        <p>Sincerely,</p>

        <p className="font-bold  text-2xl text-orange-500 font-bodo ">
          Mohammed Al-Rachid
        </p>
      </section>
    </>
  );
};

export default Founderpage;
