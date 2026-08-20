import React from "react";
import youngstudent from "../../assets/services/youngstudent.jpg";

const ScholarshipAssistant = () => {
  return (
    <section className="w-auto h-auto py-[48px] gap-10 ">
      <div className="mx-20 gap-[28px] space-y-5">
        <div className="mb-10">
          <div className="flex items-center justify-center flex-col space-y-2">
            <h1 className="text-[40px] font-bold">Scholarship Assistance</h1>
            <h1 className="text-gray-800 text-[20px]">
              Guidance to find & apply for scholarships that match your goals
            </h1>
          </div>
        </div>

        <div className="flex gap-[65px]">
          <div className="w-[608px] h-[609.83px] gap-6  space-y-5">
            <div className="bg-cover bg-center bg-no-repeat bg-gray-300 w-[608px] h-[405.83px]">
              <img src={youngstudent} className="rounded-[9.75px]" alt="" />
            </div>

            <p className="text-sm leading-relaxed text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in
            </p>

            <button className="self-start bg-[#092962] hover:bg-[#0a2149] text-white text-sm font-semibold rounded-lg px-5 py-3 transition-colors">
              Book a free consultation
            </button>
          </div>
          <div className="w-[566px] h-[610px] rounded-[16px] border-[0.5px] pt-8 px-4 pb-8 gap-8 bg-white">
            <div className="space-y-10 my-10 ">
              <h1 className="text-[25px] font-bold leading-snug text-gray-900 ">
                Explore Scholarships of
                <br />
                Your Interest
              </h1>

              <div className="flex flex-col gap-4 space-y-5 ">
                <div className="relative">
                  <select className="w-full h-[52px] appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 text-sm text-gray-400 cursor-pointer">
                    <option value="" disabled selected>
                      Select Country
                    </option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>

                <div className="relative">
                  <select className="w-full h-[52px] appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 text-sm text-gray-400 cursor-pointer ">
                    <option value="" disabled selected>
                      Select Degree
                    </option>
                    <option value="bachelor">Bachelor's</option>
                    <option value="master">Master's</option>
                    <option value="phd">PhD</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>

                <div className="relative">
                  <select className="w-full h-[52px] appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 text-sm text-gray-400 cursor-pointer ">
                    <option value="" disabled selected>
                      Funding type
                    </option>
                    <option value="full">Fully Funded</option>
                    <option value="partial">Partially Funded</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>

              <div className="">
                <button className="w-[168px] h-11 bg-[#74BF1A] hover:bg-[#6aaa1c] text-white text-sm font-semibold rounded-lg transition-colors">
                  Explore Scholarships
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarshipAssistant;
