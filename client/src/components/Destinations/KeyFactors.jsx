import React from "react";
import girl from "../../assets/destinations/girl.jpg";

const KeyFactors = () => {
  return (
    <section className="w-full h-auto bg-white">
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="w-full h-auto flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 h-auto px-0 sm:px-2 flex flex-col space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[32px] font-semibold text-gray-800 leading-tight">
              Helping You Choose A Top Study Destination?
            </h1>

            <p className="text-sm sm:text-base leading-relaxed text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in
            </p>

            {/* Feature 1 */}
            <div className="flex gap-3 sm:gap-4 md:gap-5">
              <div className="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] mt-1 flex-shrink-0 bg-[#74BF1A] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-gray-800 font-bold text-lg sm:text-[20px]">
                  Global Perspective
                </h1>
                <p className="text-sm sm:text-base leading-relaxed text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-3 sm:gap-4 md:gap-5">
              <div className="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] mt-1 flex-shrink-0 bg-[#74BF1A] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-gray-800 font-bold text-lg sm:text-[20px]">
                  High-Quality Education
                </h1>
                <p className="text-sm sm:text-base leading-relaxed text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-3 sm:gap-4 md:gap-5">
              <div className="w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] mt-1 flex-shrink-0 bg-[#74BF1A] rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-gray-800 font-bold text-lg sm:text-[20px]">
                  Language Skills
                </h1>
                <p className="text-sm sm:text-base leading-relaxed text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image - Visible on all screens */}
          <div className="w-full lg:w-1/2 rounded-[9.75px] h-[220px] sm:h-[320px] md:h-[400px] lg:h-[472px] overflow-hidden flex-shrink-0">
            <img
              src={girl}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              alt="Student studying abroad"
            />
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-7 md:pb-8 bg-gray-100 flex items-center justify-center">
        <div className="space-y-4 sm:space-y-5 px-4 text-center">
          <h1 className="text-xl sm:text-2xl md:text-[24px] font-semibold text-[#062254]">
            For further help, book a call now!
          </h1>
          <div className="flex items-center justify-center">
            <div className="w-[140px] sm:w-[150px] md:w-[163px] h-[40px] sm:h-[42px] md:h-[44px] bg-[#74BF1A] rounded-[8px] flex justify-center items-center text-white text-sm sm:text-[15px] md:text-[16px] font-semibold hover:bg-[#5da015] transition-colors duration-300 cursor-pointer">
              Talk to an Expert
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFactors;
