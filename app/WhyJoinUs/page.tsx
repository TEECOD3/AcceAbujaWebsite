import ClientButton from "@/components/ui/ClientButton";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

type Props = {};

const Page = (props: Props) => {
  return (
    <section className="">
      <div className="w-full h-[400px] lg:h-[600px] relative">
        <Image
          src="/image/7.jpg"
          alt="Hands on deck"
          placeholder="blur"
          loading="lazy"
          fill
          blurDataURL="/image/handstogetherBlur.jpg"
          className="h-full w-full object-cover object-center transition-all  duration-1000 ease-out"
        />

        <div className="absolute top-0 left-0 bg-black/20 z-10 h-full w-full flex items-center justify-center">
          <p className=" text-3xl font-bold uppercase lg:text-8xl text-white">
            Careers
          </p>
        </div>
      </div>

      <section className="my-10 mx-auto max-lg:px-5 lg:w-[80%] ">
        <h1 className=" text-2xl mb-2 lg:text-3xl font-bold uppercase ">
          Careers
        </h1>
        <h2 className=" text-xl mb-2 lg:text-2xl font-bold uppercase">
          our Culture
        </h2>

        <div className="space-y-6">
          <p>
            The sum total of all that the ACCE-ABUJA represents today is rooted
            in our Culture. The ACCE&apos;s culture is built on its shared
            values and corporate philosophy. It&apos;s really the people that
            differentiate the Authority. We hire people who are disciplined,
            focused, smart and we favor ability over experience. Although our
            employees imbibe and embody the common goals and visions of the
            Authority, we hail from a broad and diverse background, reflecting
            the diversity and inclusiveness of our teams.
          </p>
          <p>
            We maintain a professional culture often associated with top notch
            educational institutions and other affiliates, in which everyone is
            a pro-active contributor and feels comfortable sharing ideas and
            opinions
          </p>
          <p>
            We operate an open door policy while our work areas are designed to
            encourage interactions and exchange of ideas within and across
            teams. Our interactions are on a first name basis, nonetheless
            decorum and discretion is required.The ACCE tone is professional and
            succinct. The ACCE is an equal opportunities establishment. Our
            recruitment is driven strictly by needs matched with competency. We
            hire employees across functions based on best fit. In this way we
            are able to attract brilliant and committed minds whose natural
            culture fits into each role.
          </p>
        </div>

        <div className="space-y-6 mt-10">
          <h2 className=" text-xl  lg:text-2xl font-bold uppercase">
            why join us
          </h2>
          <p>
            Why Join Us In our short period of existence, we have assembled an
            exceptional team with a broad mix of educational and professional
            experiences. Diversity and inclusiveness are a strong business
            imperative for us as we respect the competencies, talents and
            differences of our diverse group of employees. The representation of
            the Nigeria system in our workforce is not merely to comply with the
            corporate philosophy and policy, but a belief in the strength of
            diversity and a commitment to inclusion. We will continue to strive
            for fair representation in our recruitment process without
            compromising on skills and fit
          </p>
          <p>
            At the ACCE, we believe that people are the thrust of the
            organization&apos;s success. This is why we always seek to hire and
            develop the best talents available within Nigeria and where
            necessary, beyond our shores. Our employees share a common passion
            to exceed the call of duty while contributing to the implementation
            of ACCE&apos;s mandates
          </p>
          <p>
            The organisation&apos;s people management practices have been
            developed, using world class standards with clear and specific aims
            which include: Fostering the individual strengths, talents and
            aspirations of each of our employees; Providing a rich and
            stimulating working environment for employees to contribute to the
            overall success of the School In joining us, you would be associated
            with a world class team of highly motivated individuals from diverse
            backgrounds, knowledge, experiences and abilities. If you are a
            self-starter who is seeking for a more exciting and challenging
            career with significant opportunities for self-development and real
            impact on society, then ACCE is the place for you.
          </p>
          <ClientButton
            href="/Vacancy"
            className=" text-base font-bold uppercase max-w-max px-0 "
            variant={"link"}
          >
            <span>Join us.</span> <ArrowRightIcon className="h-4 w-4 ml-2" />
          </ClientButton>
        </div>
      </section>
    </section>
  );
};

export default Page;
