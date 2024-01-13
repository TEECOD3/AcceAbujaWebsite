import Image from "next/image";
import React from "react";
import founderImage from "../../public/president.jpg";

type Props = {};

const Founderpage = (props: Props) => {
  return (
    <>
      <section className="relative w-full bg-black  py-10">
        <div className="max-w-[80%] md:w-[65%] mx-auto relative flex gap-x-4  lg:flex-row justify-between items-center h-full">
          <div className=" max-md:hidden lg:block text-white max-sm:px-10 ">
            <div className=" bg-orange-500 h-[150px] w-[300px]  lg:w-[500px] outline outline-4 outline-offset-8 outline-orange-500">
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

          <div className="h-[500px] w-[400px] relative flex-shrink-0">
            <Image
              src={founderImage}
              alt="acce founder image"
              className="object-cover object-top h-full w-full brightness-90"
              height={500}
              width={400}
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAdEAABBAIDAAAAAAAAAAAAAAABAAMEBQIGESJB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADETH/2gAMAwEAAhEDEQA/AJVtjdazqlBXTHQHo+HYA+8IiK1FXOQriQ5Gz//Z"
            />
          </div>
        </div>
      </section>

      <section className="my-10 w-[80%] mx-auto flex  flex-col gap-y-8 max-sm:w-[90%] ">
        <div className=" space-y-2">
          <p className="text-xl lg:text-2xl font-bold text-orange-400 capitalize md:hidden">
            welcome message from the founder
          </p>
        </div>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, placeat!
          Vero voluptatem sequi veniam deleniti, hic at quia quibusdam natus
          nostrum quam qui facere quas beatae maxime provident mollitia
          dolorem.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa aperiam distinctio fuga odit a repudiandae accusantium minima
          voluptates impedit harum, tempora, delectus nostrum expedita, deserunt
          officiis veniam maxime corporis commodi?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, placeat!
          Vero voluptatem sequi veniam deleniti, hic at quia quibusdam natus
          nostrum quam qui facere quas beatae maxime provident mollitia
          dolorem.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa aperiam distinctio fuga odit a repudiandae accusantium minima
          voluptates impedit harum, tempora, delectus nostrum expedita, deserunt
          officiis veniam maxime corporis commodi?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, placeat!
          Vero voluptatem sequi veniam deleniti, hic at quia quibusdam natus
          nostrum quam qui facere quas beatae maxime provident mollitia
          dolorem.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa aperiam distinctio fuga odit a repudiandae accusantium minima
          voluptates impedit harum, tempora, delectus nostrum expedita, deserunt
          officiis veniam maxime corporis commodi?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, placeat!
          Vero voluptatem sequi veniam deleniti, hic at quia quibusdam natus
          nostrum quam qui facere quas beatae maxime provident mollitia
          dolorem.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa aperiam distinctio fuga odit a repudiandae accusantium minima
          voluptates impedit harum, tempora, delectus nostrum expedita, deserunt
          officiis veniam maxime corporis commodi?
        </p>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, placeat!
          Vero voluptatem sequi veniam deleniti, hic at quia quibusdam natus
          nostrum quam qui facere quas beatae maxime provident mollitia
          dolorem.lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa aperiam distinctio fuga odit a repudiandae accusantium minima
          voluptates impedit harum, tempora, delectus nostrum expedita, deserunt
          officiis veniam maxime corporis commodi?
        </p>

        <div className="font-bold space-y-2">
          <p>Have a wonderful year</p>
          <p>Dr. M. K. Dikwa, mni</p>
        </div>
      </section>
    </>
  );
};

export default Founderpage;
