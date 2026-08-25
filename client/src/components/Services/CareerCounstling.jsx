import React from "react";
import career from "../../assets/services/career.jpg";

const CareerCounstling = () => {
  return (
    <section className="w-full h-auto py-8 sm:py-12 md:py-[48px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 bg-white">
      <div className="w-full max-w-[1440px] mx-auto gap-4 sm:gap-6 md:gap-[28px] space-y-4 sm:space-y-5 md:space-y-6">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <div className="flex items-center justify-center flex-col space-y-2 text-center px-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900">
              Career Counseling & Consultation
            </h1>
            <h1 className="text-gray-800 text-base sm:text-lg md:text-[20px] max-w-3xl">
              Helping you choose the right country, university and program for
              your future success
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col-reverse lg:flex-row gap-6 md:gap-8 lg:gap-[65px]">
          {/* Left Section - Form */}
          <div className="w-full lg:w-[566px] h-auto gap-4 sm:gap-5 md:gap-[24px]">
            <div className="w-full h-auto lg:h-[655px] rounded-[16px] border-[0.5px] pt-6 sm:pt-8 px-4 sm:px-5 md:px-6 pb-6 sm:pb-8 gap-6 sm:gap-8 bg-gray-100">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 leading-snug">
                Book Your Counseling <br className="hidden sm:block" />
                session with us.
              </h2>

              <form className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-lg border outline-none px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-neutral-700 placeholder-neutral-400 focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent"
                />

                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full rounded-lg border px-3 sm:px-4 outline-none py-2.5 sm:py-3 text-xs sm:text-sm text-neutral-700 placeholder-neutral-400 focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent"
                />

                <div className="relative">
                  <select className="w-full h-[44px] sm:h-[48px] md:h-[52px] appearance-none bg-white border border-gray-200 rounded-lg pl-3 sm:pl-4 pr-8 sm:pr-10 text-xs sm:text-sm text-gray-400 outline-none cursor-pointer focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent">
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

                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full resize-none rounded-lg border px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-neutral-700 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent"
                />
              </form>

              <div className="mt-4 sm:mt-6">
                <button className="w-full sm:w-[168px] h-10 sm:h-11 bg-[#74BF1A] hover:bg-[#6aaa1c] text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors">
                  Send Inquiry
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-[608px] h-auto gap-4 sm:gap-5 md:gap-6 space-y-4 sm:space-y-5">
            <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] bg-gray-300 rounded-[9.75px] overflow-hidden mb-6 sm:mb-8 md:mb-10">
              <img
                src={career}
                className="w-full h-full object-cover"
                alt="Career counseling"
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
                    Country Selection Guidance
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
                    University Matching
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
                    Program Recommendations
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
        </div>
      </div>
    </section>
  );
};

export default CareerCounstling;
