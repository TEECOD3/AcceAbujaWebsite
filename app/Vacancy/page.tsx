import { VacancyForm } from "@/components/ui/VacancyForm";
import React from "react";

type Props = {};

const Vacancy = (props: Props) => {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl  mt-10  max-lg:px-1 ">
        <div className=" max-lg:px-2 lg:w-3/4 mx-auto mt-10">
          <h1 className=" text-2xl mb-4 lg:text-3xl font-bold uppercase w-full text-center ">
            Recruitment Process
          </h1>
          <div className="space-y-6">
            <p>
              The ACCE is an equal opportunities employer. All positions are
              publicly advertised in order to attract the best and most suitable
              talents.
            </p>
            <p>
              Please click on the link below to view current vacancies across
              functions and grade levels. Interested applicants can apply for
              advertised vacancies or submit their CV&apos;s for consideration
              directly to{" "}
              <span className="font-bold">recruitment@acce-abuja.com.ng</span>.
              Eligible candidates will be shortlisted and invited to go through
              the ACCE&apos;s four-step recruitment process as summarized below:
            </p>
            <p>
              <span className="font-bold text-2xl">Step 1:</span> Entry Testing
              School Assessments/Tests will be administered on all eligible
              entry level applicants and/or candidates for specialised roles. If
              found eligible and shortlisted, the candidate will be invited to
              complete an assessment which may comprise questions covering:
              Spatial Reasoning, Abstract Reasoning, Essay Writing, Verbal
              Reasoning, History/Current Affairs, Numerical Reasoning, Logical
              Reasoning and Data Interpretation. These assessments are designed
              to help ACCE determine if the candidate meets the minimum skill
              and competency requirements needed to succeed in the School.
            </p>
            <p>
              <span className="font-bold text-2xl">Step 2:</span> Pre-Interview
              Candidates who are successful at the first stage would then be
              invited to a panel interview which will be largely
              competency-based. Candidates are expected to demonstrate key
              capabilities and display cognitive qualities and skills the School
              requires.
            </p>
            <p>
              <span className="font-bold text-2xl">Step 3:</span> Final
              Interview This stage involves a one-on-one interview with one or
              more members of the Executive Management Team. In addition to more
              competency questions, candidates are expected to demonstrate
              industry knowledge and passion required to work in the ACCE.
            </p>

            <p>
              <span className="font-bold text-2xl">Step 4:</span> Offer and
              Acceptance Candidates who are successful at the Final Interview
              will be invited for an informal chat with a member of the Human
              Resources Team, where evidence of relevant
              qualifications/credentials will be verified. Following this, an
              offer will be made to the successful candidate(s) based on the
              role/function advertised.
            </p>
          </div>
        </div>
      </div>

      <div className="my-16 lg:w-3/4 mx-auto max-lg:w-[90%] text-center">
        <h1 className="capitalize text-3xl lg:text-4xl font-bold mb-6">
          Apply
        </h1>
        <VacancyForm />
      </div>
    </section>
  );
};

export default Vacancy;
