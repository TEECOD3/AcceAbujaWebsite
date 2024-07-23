import Image from "next/image";
import React from "react";
import founderImage from "../../public/founderlatest.jpeg";
import logo from "../../public/image2.png";
import ClientButton from "@/components/ui/ClientButton";
import MarkdownRenderer from "@/components/markdownrenderer";

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
        <div className="lg:max-w-[80%] sm:w-[100%]  mx-auto relative flex gap-x-4  lg:flex-row justify-between items-center h-full">
          <div className=" sm:w-[40%]  max-md:hidden lg:block text-white max-sm:px-10 ">
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

        <MarkdownRenderer filePath="/md-files/foundermessage.md" />

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
          <p className="font-bold  text-2xl text-orange-500 font-bodo ">
            Dr. M. K. Dikwa, mni
          </p>
        </div>
      </section>
    </>
  );
};

export default Founderpage;
