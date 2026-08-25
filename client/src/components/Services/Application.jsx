import React from "react";
import prepration from "../../assets/services/prepration.jpg";

const Application = () => {
  const steps = [
    {
      number: 1,
      title: "Document Collection",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
      number: 2,
      title: "Application Submission",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
      number: 3,
      title: "Interview Prep",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
      number: 4,
      title: "Final Admission",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
  ];

  return (
    <section className="w-full h-auto py-8 sm:py-12 md:py-[48px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 ">
      <div className="w-full max-w-[1440px] mx-auto gap-4 sm:gap-6 md:gap-[28px] space-y-4 sm:space-y-5 md:space-y-6">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <div className="flex items-center justify-center flex-col space-y-2 text-center px-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900">
              Application & Admission Support
            </h1>
            <h1 className="text-gray-800 text-base sm:text-lg md:text-[20px] max-w-2xl">
              Boost your test scores with experts resources
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[65px]">
          {/* Left Section */}
          <div className="w-full lg:w-[608px] h-auto gap-4 sm:gap-5 md:gap-6 space-y-4 sm:space-y-5">
            <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[405.83px] bg-gray-300 rounded-[9.75px] overflow-hidden mt-4 sm:mt-5">
              <img
                src={prepration}
                className="w-full h-full object-cover"
                alt="Application support"
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

            {/* Feature Cards */}
            <div className="w-full lg:w-[500px] px-1 sm:px-2 flex flex-col space-y-2 sm:space-y-3">
              {/* Feature 1 */}
              <div className="flex gap-3 sm:gap-5">
                <div className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] mt-1 flex-shrink-0 bg-[#74BF1A] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-3 sm:size-4 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-gray-800 font-bold text-base sm:text-[18px] md:text-[20px]">
                    Free Practice Resources
                  </h1>
                  <p className="text-xs sm:text-sm leading-relaxed text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-3 sm:gap-5">
                <div className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] mt-1 flex-shrink-0 bg-[#74BF1A] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-3 sm:size-4 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-gray-800 font-bold text-base sm:text-[18px] md:text-[20px]">
                    Personalized Test Strategies
                  </h1>
                  <p className="text-xs sm:text-sm leading-relaxed text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-3 sm:gap-5">
                <div className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] mt-1 flex-shrink-0 bg-[#74BF1A] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-3 sm:size-4 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="text-gray-800 font-bold text-base sm:text-[18px] md:text-[20px]">
                    Tips from Certified Trainers
                  </h1>
                  <p className="text-xs sm:text-sm leading-relaxed text-gray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full sm:w-auto bg-[#74BF1A] hover:bg-[#6aaa1c] text-white text-xs sm:text-sm font-semibold rounded-lg px-4 sm:px-5 py-2.5 sm:py-3 transition-colors">
              Book a free consultation
            </button>
          </div>

          {/* Right Section - Process Timeline */}
          <div className="w-full lg:w-auto h-auto lg:h-[740px] rounded-2xl p-4 sm:p-5 md:p-6 gap-4 sm:gap-5 md:gap-6 bg-white mt-4 sm:mt-5">
            <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              Process Timeline
            </div>
            <div className="py-4 sm:py-6 md:py-8">
              {steps.map((step, i) => (
                <div key={step.number} className="flex">
                  {/* Number + connecting line */}
                  <div className="flex flex-col items-center mr-3 sm:mr-4 md:mr-5">
                    <div className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] md:w-[65px] md:h-[65px] shrink-0 rounded-full bg-[#74BF1A] text-white flex items-center justify-center text-lg sm:text-xl md:text-2xl font-semibold">
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-[2px] flex-1 min-h-[20px] bg-gray-300" />
                    )}
                  </div>

                  {/* Text content */}
                  <div
                    className={
                      i < steps.length - 1 ? "pb-6 sm:pb-10 md:pb-[61px]" : ""
                    }
                  >
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
