import Slider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-[#fac61b] from-10% via-[#f39f20] via-30% to-[#f38120] to-90% h-[50vh]">
      <div className="w-full h-[30%] bg-gradient-to-r from-[#fac61b] from-10% via-[#f39f20] via-30% to-[#f38120] to-90% ">
        <div className="flex flex-col gap-y-2 lg:w-[50%] h-full mx-auto text-center items-center justify-center pt-20">
          <p className="uppercase text-base text-white mb-2">
            Lorem ipsum dolor sit{" "}
          </p>
          <p className=" text-3xl lg:text-5xl font-semibold text-white capitalize mb-4">
            inspiring excellence
          </p>
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            accusamus quibusdam, assumenda iusto velit earum voluptas cupiditate
            officiis fuga dignissimos{" "}
          </p>
        </div>
      </div>
      <div className="w-full mt-10 lg:mt-24">
        <Slider />
      </div>
    </main>
  );
}
