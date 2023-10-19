import AboutSchool from "@/components/Section/AboutSchool";
import HeadSection from "@/components/Section/HeadSection";
import Sliders from "@/components/ui/Sliders";

export default function Home() {
  return (
    <main className="">
      <div className="w-full h-[40%] bg-gradient-to-r from-[#fac61b] from-10% via-[#f39f20] via-30% pt-16 pb-40 to-[#f38120] to-90% ">
        <div className="flex flex-col gap-y-2 lg:w-[50%] h-full mx-auto text-center items-center justify-center ">
          <p className="uppercase text-base text-white mb-2 font-semibold">
            Lorem ipsum dolor sit{" "}
          </p>
          <p className=" text-3xl lg:text-5xl font-semibold text-white capitalize mb-4">
            inspiring excellence
          </p>
          <p className="text-white font-semibold max-sm:px-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            accusamus quibusdam, assumenda iusto velit earum voluptas cupiditate
            officiis fuga dignissimos{" "}
          </p>
        </div>
      </div>
      <section className="w-full -mt-10">
        <Sliders />
      </section>

      <section className="mt-32 lg:mt-40">
        <HeadSection />
      </section>
      <section className="mt-24 lg:mt-10">
        <AboutSchool />
      </section>
    </main>
  );
}
