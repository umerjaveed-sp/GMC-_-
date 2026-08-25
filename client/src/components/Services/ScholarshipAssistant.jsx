import React from "react";
import youngstudent from "../../assets/services/youngstudent.jpg";

const ScholarshipAssistant = () => {
  return (
    <section className="w-full h-auto py-8 sm:py-12 md:py-[48px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div className="w-full max-w-[1440px] mx-auto gap-4 sm:gap-6 md:gap-[28px] space-y-4 sm:space-y-5 md:space-y-6">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <div className="flex items-center justify-center flex-col space-y-2 text-center px-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900">
              Scholarship Assistance
            </h1>
            <h1 className="text-gray-800 text-base sm:text-lg md:text-[20px] max-w-2xl">
              Guidance to find & apply for scholarships that match your goals
            </h1>
          </div>
        </div>

        {/* Main Content - Responsive Grid */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[65px]">
          {/* Left Section */}
          <div className="w-full lg:w-[608px] h-auto lg:h-[609.83px] gap-4 sm:gap-5 md:gap-6 space-y-4 sm:space-y-5">
            <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[405.83px] bg-gray-300 rounded-[9.75px] overflow-hidden">
              <img
                src={youngstudent}
                className="w-full h-full object-cover"
                alt="Young student studying"
              />
            </div>

            <p className="text-xs sm:text-sm leading-relaxed text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in
            </p>

            <button className="w-full sm:w-auto bg-[#092962] hover:bg-[#0a2149] text-white text-xs sm:text-sm font-semibold rounded-lg px-4 sm:px-5 py-2.5 sm:py-3 transition-colors">
              Book a free consultation
            </button>
          </div>

          {/* Right Section - Form Card */}
          <div className="w-full lg:w-[566px] h-auto lg:h-[610px] rounded-[16px] border-[0.5px] pt-6 sm:pt-8 px-4 sm:px-5 md:px-6 pb-6 sm:pb-8 gap-6 sm:gap-8 bg-white">
            <div className="space-y-6 sm:space-y-8 md:space-y-10 my-6 sm:my-8 md:my-10">
              <h1 className="text-xl sm:text-2xl md:text-[25px] font-bold leading-snug text-gray-900">
                Explore Scholarships of
                <br className="hidden sm:block" />
                Your Interest
              </h1>

              <div className="flex flex-col gap-3 sm:gap-4 space-y-3 sm:space-y-5">
                {/* Select Country */}
                <div className="relative">
                  <select className="w-full h-[44px] sm:h-[48px] md:h-[52px] appearance-none bg-white border border-gray-200 rounded-lg pl-3 sm:pl-4 pr-8 sm:pr-10 text-xs sm:text-sm text-gray-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent">
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
                    className="size-3.5 sm:size-4 pointer-events-none absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>

                {/* Select Degree */}
                <div className="relative">
                  <select className="w-full h-[44px] sm:h-[48px] md:h-[52px] appearance-none bg-white border border-gray-200 rounded-lg pl-3 sm:pl-4 pr-8 sm:pr-10 text-xs sm:text-sm text-gray-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent">
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
                    className="size-3.5 sm:size-4 pointer-events-none absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>

                {/* Funding Type */}
                <div className="relative">
                  <select className="w-full h-[44px] sm:h-[48px] md:h-[52px] appearance-none bg-white border border-gray-200 rounded-lg pl-3 sm:pl-4 pr-8 sm:pr-10 text-xs sm:text-sm text-gray-400 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent">
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
                    className="size-3.5 sm:size-4 pointer-events-none absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <button className="w-full sm:w-[168px] h-10 sm:h-11 bg-[#74BF1A] hover:bg-[#6aaa1c] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors">
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
