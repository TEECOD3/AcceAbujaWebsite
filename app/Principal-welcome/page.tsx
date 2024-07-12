import Image from "next/image";
import React from "react";
import founderImage from "../../public/teacherimage.png";
import logo from "../../public/image2.png";
import ClientButton from "@/components/ui/ClientButton";

type Props = {};

const Founderpage = (props: Props) => {
  return (
    <>
      <section className="relative w-full  h-[720px] lg:h-[700px] flex bg-white">
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
              src={founderImage}
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
        <div className=" space-y-2">
          <p className="text-xl lg:text-2xl font-bold text-orange-400 capitalize ">
            welcome message from our principal
          </p>
        </div>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          deserunt, amet adipisci atque, voluptas consequuntur debitis est
          dignissimos id ipsam nobis. Iure nulla nam ut, dolores qui similique
          reprehenderit itaque? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Doloremque deserunt, amet adipisci atque, voluptas
          consequuntur debitis est dignissimos id ipsam nobis. Iure nulla nam
          ut, dolores qui similique reprehenderit itaque? Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Doloremque deserunt, amet adipisci
          atque, voluptas consequuntur debitis est dignissimos id ipsam nobis.
          Iure nulla nam ut, dolores qui similique reprehenderit itaque? Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          deserunt, amet adipisci atque, voluptas consequuntur debitis est
          dignissimos id ipsam nobis. Iure nulla nam ut, dolores qui similique
          reprehenderit itaque?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          deserunt, amet adipisci atque, voluptas consequuntur debitis est
          dignissimos id ipsam nobis. Iure nulla nam ut, dolores qui similique
          reprehenderit itaque? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Doloremque deserunt, amet adipisci atque, voluptas
          consequuntur debitis est dignissimos id ipsam nobis. Iure nulla nam
          ut, dolores qui similique reprehenderit itaque? Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Doloremque deserunt, amet adipisci
          atque, voluptas consequuntur debitis est dignissimos id ipsam nobis.
          Iure nulla nam ut, dolores qui similique reprehenderit itaque? Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          deserunt, amet adipisci atque, voluptas consequuntur debitis est
          dignissimos id ipsam nobis. Iure nulla nam ut, dolores qui similique
          reprehenderit itaque?
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          deserunt, amet adipisci atque, voluptas consequuntur debitis est
          dignissimos id ipsam nobis. Iure nulla nam ut, dolores qui similique
          reprehenderit itaque? Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Doloremque deserunt, amet adipisci atque, voluptas
          consequuntur debitis est dignissimos id ipsam nobis. Iure nulla nam
          ut, dolores qui similique reprehenderit itaque? Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Doloremque deserunt, amet adipisci
          atque, voluptas consequuntur debitis est dignissimos id ipsam nobis.
          Iure nulla nam ut, dolores qui similique reprehenderit itaque? Lorem
          ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
          deserunt, amet adipisci atque, voluptas consequuntur debitis est
          dignissimos id ipsam nobis. Iure nulla nam ut, dolores qui similique
          reprehenderit itaque?
        </p>

        <div className="flex flex-wrap items-center">
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium culpa, iure maxime est itaque minus
          </span>{" "}
          <ClientButton
            className="text-orange-400 font-bold px-0 "
            href="/AboutUs"
            variant={"link"}
          >
            Here
          </ClientButton>
        </div>
      </section>
    </>
  );
};

export default Founderpage;
