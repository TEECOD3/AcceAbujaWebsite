import Aboutimage from "@/public/LatestImage/schoolcompound.jpg";
import Image from "next/image";
import teamimage from "@/public/president.jpg";

const page = async () => {
  return (
    <section className="">
      <div className="w-full h-96 lg:h-[700px] relative py-28">
        <Image
          src={Aboutimage}
          alt="team hero image"
          loading="lazy"
          fill
          className="object-cover object-center w-full h-full transition-all duration-1000 ease-out brightness-75"
        />
        <div className="absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-black/20">
          <p className="text-3xl font-bold text-white uppercase lg:text-8xl">
            executive team
          </p>
        </div>
      </div>

      <section className="pb-20 max-w-5xl mx-auto space-y-16 container ">
        <div className="grid grid-cols-1 lg:grid-cols-[10rem_1fr] gap-x-9 mt-10 place-content-center max-lg:text-center gap-y-4">
          <div className="relative h-[150px] w-[150px] rounded-full overflow-hidden max-lg:mx-auto">
            <Image
              src={teamimage}
              alt="team member image"
              fill
              className="absolute h-full w-full object-cover object-top"
            />
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold uppercase text-base">
              David Temitope
            </h4>
            <h4 className="font-semibold  text-sm capitalize">
              head principal
            </h4>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              vitae tempora, perspiciatis voluptate est sed aperiam consequatur
              quam neque amet fuga ducimus, facilis repellendus quas expedita
              eaque id facere numquam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Explicabo vitae tempora, perspiciatis voluptate
              est sed aperiam consequatur quam neque amet fuga ducimus, facilis
              repellendus quas expedita eaque id facere numquam. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Explicabo vitae
              tempora, perspiciatis voluptate est sed aperiam consequatur quam
              neque amet fuga ducimus, facilis repellendus quas expedita eaque
              id facere numquam.
            </p>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              vitae tempora, perspiciatis voluptate est sed aperiam consequatur
              quam neque amet fuga ducimus, facilis repellendus quas expedita
              eaque id facere numquam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Explicabo vitae tempora, perspiciatis voluptate
              est sed aperiam consequatur quam neque amet fuga ducimus, facilis
              repellendus quas expedita eaque id facere numquam. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Explicabo vitae
              tempora, perspiciatis voluptate est sed aperiam consequatur quam
              neque amet fuga ducimus, facilis repellendus quas expedita eaque
              id facere numquam.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[10rem_1fr] gap-x-9 mt-10 place-content-center max-lg:text-center gap-y-4">
          <div className="relative h-[150px] w-[150px] rounded-full overflow-hidden max-lg:mx-auto">
            <Image
              src={teamimage}
              alt="team member image"
              fill
              className="absolute h-full w-full object-cover object-top"
            />
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold uppercase text-base">
              David Temitope
            </h4>
            <h4 className="font-semibold text-sm  capitalize">
              head principal
            </h4>
            <p className=" text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              vitae tempora, perspiciatis voluptate est sed aperiam consequatur
              quam neque amet fuga ducimus, facilis repellendus quas expedita
              eaque id facere numquam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Explicabo vitae tempora, perspiciatis voluptate
              est sed aperiam consequatur quam neque amet fuga ducimus, facilis
              repellendus quas expedita eaque id facere numquam. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Explicabo vitae
              tempora, perspiciatis voluptate est sed aperiam consequatur quam
              neque amet fuga ducimus, facilis repellendus quas expedita eaque
              id facere numquam.
            </p>
            <p className=" text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              vitae tempora, perspiciatis voluptate est sed aperiam consequatur
              quam neque amet fuga ducimus, facilis repellendus quas expedita
              eaque id facere numquam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Explicabo vitae tempora, perspiciatis voluptate
              est sed aperiam consequatur quam neque amet fuga ducimus, facilis
              repellendus quas expedita eaque id facere numquam. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Explicabo vitae
              tempora, perspiciatis voluptate est sed aperiam consequatur quam
              neque amet fuga ducimus, facilis repellendus quas expedita eaque
              id facere numquam.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[10rem_1fr] gap-x-9 mt-10 place-content-center max-lg:text-center gap-y-4">
          <div className="relative h-[150px] w-[150px] rounded-full overflow-hidden max-lg:mx-auto">
            <Image
              src={teamimage}
              alt="team member image"
              fill
              className="absolute h-full w-full object-cover object-top"
            />
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold uppercase text-base">
              David Temitope
            </h4>
            <h4 className="font-semibold text-sm  capitalize">
              head principal
            </h4>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              vitae tempora, perspiciatis voluptate est sed aperiam consequatur
              quam neque amet fuga ducimus, facilis repellendus quas expedita
              eaque id facere numquam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Explicabo vitae tempora, perspiciatis voluptate
              est sed aperiam consequatur quam neque amet fuga ducimus, facilis
              repellendus quas expedita eaque id facere numquam. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Explicabo vitae
              tempora, perspiciatis voluptate est sed aperiam consequatur quam
              neque amet fuga ducimus, facilis repellendus quas expedita eaque
              id facere numquam.
            </p>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              vitae tempora, perspiciatis voluptate est sed aperiam consequatur
              quam neque amet fuga ducimus, facilis repellendus quas expedita
              eaque id facere numquam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Explicabo vitae tempora, perspiciatis voluptate
              est sed aperiam consequatur quam neque amet fuga ducimus, facilis
              repellendus quas expedita eaque id facere numquam. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Explicabo vitae
              tempora, perspiciatis voluptate est sed aperiam consequatur quam
              neque amet fuga ducimus, facilis repellendus quas expedita eaque
              id facere numquam.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[10rem_1fr] gap-x-9 mt-10 place-content-center max-lg:text-center gap-y-4">
          <div className="relative h-[150px] w-[150px] rounded-full overflow-hidden max-lg:mx-auto">
            <Image
              src={teamimage}
              alt="team member image"
              fill
              className="absolute h-full w-full object-cover object-top"
            />
          </div>

          <div className="space-y-2">
            <h4 className="font-semibold uppercase text-base">
              David Temitope
            </h4>
            <h4 className="font-semibold text-sm  capitalize">
              head principal
            </h4>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              vitae tempora, perspiciatis voluptate est sed aperiam consequatur
              quam neque amet fuga ducimus, facilis repellendus quas expedita
              eaque id facere numquam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Explicabo vitae tempora, perspiciatis voluptate
              est sed aperiam consequatur quam neque amet fuga ducimus, facilis
              repellendus quas expedita eaque id facere numquam. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Explicabo vitae
              tempora, perspiciatis voluptate est sed aperiam consequatur quam
              neque amet fuga ducimus, facilis repellendus quas expedita eaque
              id facere numquam.
            </p>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              vitae tempora, perspiciatis voluptate est sed aperiam consequatur
              quam neque amet fuga ducimus, facilis repellendus quas expedita
              eaque id facere numquam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Explicabo vitae tempora, perspiciatis voluptate
              est sed aperiam consequatur quam neque amet fuga ducimus, facilis
              repellendus quas expedita eaque id facere numquam. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Explicabo vitae
              tempora, perspiciatis voluptate est sed aperiam consequatur quam
              neque amet fuga ducimus, facilis repellendus quas expedita eaque
              id facere numquam.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
