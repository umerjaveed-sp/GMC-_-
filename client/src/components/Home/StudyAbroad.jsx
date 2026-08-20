import React from "react";
import city from "../../assets/home/studyabroad.jpg";

const StudyAbroad = () => {
  const applicationSteps = [
    { step: 1, title: "Select Your Program" },
    { step: 2, title: "Submit Application" },
    { step: 3, title: "Receive Office Letter" },
    { step: 4, title: "Fulfill Condition" },
    { step: 5, title: "Pay Tuition Deposit" },
    { step: 6, title: "Get Unconditional Offer" },
    { step: 7, title: "Apply for Visa" },
    { step: 8, title: "Book Flight & Accommodation" },
    { step: 9, title: "Start Your Program" },
  ];

  return (
    <section className="h-auto  w-auto py-[24px] sm:py-[32px] md:py-[40px] lg:py-[48px] gap-[16px] sm:gap-[24px] md:gap-[28px] lg:gap-[32px] px-4 sm:px-6 md:px-8 lg:px-20">
      {/* Heading */}
      <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
        <div className="flex items-center justify-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 font-bold text-center">
            Study Abroad
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-xs sm:text-sm md:text-base text-center px-2 sm:px-0">
            Lorem ipsum dolor sit, amet consectetur
          </p>
        </div>
      </div>

      {/* Form and Image */}
      <div className="w-auto h-auto gap-[16px] sm:gap-[24px] md:gap-[28px] lg:gap-[32px] flex flex-col lg:flex-row mt-3 sm:mt-4 md:mt-5">
        {/* Steps List */}
        <div className="w-full lg:w-[604px] h-auto my-1 sm:my-2 space-y-1 sm:space-y-2 md:space-y-3">
          {applicationSteps.map((item) => (
            <div
              key={item.step}
              className="w-full lg:w-[604px] h-auto rounded-[8px] bg-white mb-1 sm:mb-2 p-2 sm:p-3 md:p-4 flex  sm:flex-row items-start flex-row sm:items-center justify-between hover:shadow-md gap-1 sm:gap-2 md:gap-4"
            >
              <div className="flex items-center  gap-2 sm:gap-3 md:gap-4 w-full sm:w-auto">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 sm:size-5 md:size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
                <div className="font-bold text-sm sm:text-base md:text-lg lg:text-2xl">
                  <h1>{item.title}</h1>
                </div>
              </div>
              <div className="w-[70px] sm:w-[80px] md:w-[90px] lg:w-[104px] h-[28px] sm:h-[32px] md:h-[36px] lg:h-[42px] rounded-[8px] text-white bg-[#021A54] flex items-center justify-center flex-shrink-0 text-xs sm:text-sm md:text-base">
                <div>Step {item.step}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Image and Text Section */}
        <div className="w-full lg:w-auto h-auto space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-5 mt-3 sm:mt-4 md:mt-0">
          <div className="w-full h-auto">
            <img
              src={city}
              className="w-full h-[150px] sm:h-[180px] md:h-[220px] lg:h-auto rounded-[12px] sm:rounded-[14px] md:rounded-[16px] object-cover"
              alt="Study abroad"
            />
          </div>

          <div className="space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5">
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              vel maxime sequi, corrupti esse rerum, repellat fuga repellendus
              accusantium possimus laboriosam est. Eveniet cupiditate nam
              pariatur magnam officia omnis quae.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Veritatis quasi voluptatum aut repellat. Voluptatibus delectus
              atque quisquam id vitae odio libero, nesciunt ipsam quis velit
              doloribus ipsa rerum consectetur reprehenderit. Dolor vel
              voluptates soluta deserunt, fuga impedit dolorum, temporibus
              doloremque commodi illum quod saepe dolorem repudiandae
              accusantium aperiam provident omnis delectus ut aliquid beatae?
              Blanditiis quisquam dolore dolores ratione odit.
            </p>
          </div>

          <button className="flex items-center justify-center w-full sm:w-fit h-auto px-4 sm:px-5 md:px-6 py-[10px] sm:py-[12px] md:py-[14px] gap-2 rounded-lg bg-[#74BF1A] text-white font-medium hover:bg-[#5FA016] transition-all duration-200 mt-1 sm:mt-2">
            <span className="text-sm sm:text-base">Start Your Journey</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudyAbroad;
