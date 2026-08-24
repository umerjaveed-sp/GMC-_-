import React from "react";
import library from "../../assets/blog/library.jpg";
import webenar from "../../assets/events/webenar.jpg";
import { useNavigate } from "react-router-dom";

const HighlightOfWeek = () => {
  const navigate = useNavigate();
  return (
    <section className="w-auto h-auto lg:h-[804px] mt-6 sm:mt-8 md:mt-10 lg:mt-10">
      <div className="pt-8 sm:pt-10 md:pt-12 lg:pt-12 pb-8 sm:pb-10 md:pb-12 lg:pb-12 mx-4 sm:mx-8 md:mx-12 lg:mx-20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="text-gray-800 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[35px] text-center sm:text-left">
            Highlights of the Week
          </div>
          <div className="w-[100px] sm:w-[110px] md:w-[119px] h-[38px] sm:h-[40px] md:h-[44px] bg-[#062254] rounded-[8px] flex items-center justify-center text-white font-semibold text-sm sm:text-base cursor-pointer hover:bg-[#071731] transition-all duration-200">
            <div>View More</div>
          </div>
        </div>

        <div
          className="w-auto h-auto lg:h-[600px] bg-cover bg-center bg-no-repeat rounded-[16px] mt-6 sm:mt-8 md:mt-10 lg:mt-10 relative p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0"
          style={{ backgroundImage: `url(${library})` }}
        >
          {/* Card - Left Side */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-[280px] sm:max-w-[300px] md:max-w-[340px] lg:max-w-[380px] h-auto min-h-[380px] sm:min-h-[420px] md:min-h-[460px] lg:min-h-[500px] p-3 sm:p-4 md:p-5 lg:p-6 gap-2 sm:gap-3 md:gap-4 flex flex-col">
            {/* Image Section */}
            <div className="rounded-[8px] flex items-center justify-center w-full border">
              <img
                src={webenar}
                alt="blog"
                className="w-full h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px] rounded-[12px] object-cover"
              />
            </div>

            <div className="flex items-center justify-between text-[#041C47]">
              <div className="flex gap-1 sm:gap-1.5 md:gap-2 items-center">
                <div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 sm:w-4.5 md:w-5 lg:w-5.5 h-4 sm:h-4.5 md:h-5 lg:h-5.5"
                  >
                    <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="font-semibold text-xs sm:text-sm md:text-base lg:text-[18px]">
                  Blog Category
                </div>
              </div>

              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 sm:size-4.5 md:size-5 lg:size-5.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5 flex-1 flex flex-col">
              <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#322F35] font-bold leading-tight line-clamp-2">
                  Technology
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-[#605D64] leading-relaxed line-clamp-2 sm:line-clamp-3 md:line-clamp-3">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>

              {/* Event Details */}
              <div className="flex-1 space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-2.5">
                <div className="flex gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-3.5 sm:size-4 md:size-4.5 lg:size-5 text-[#062254] flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                  <span className="font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base text-[#605D64]">
                    05 May, 2025
                  </span>
                </div>

                <div className="flex gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-3.5 sm:size-4 md:size-4.5 lg:size-5 text-[#062254] flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  <span className="font-semibold text-[10px] sm:text-xs md:text-sm lg:text-base text-[#605D64]">
                    Mr. Josh
                  </span>
                </div>
              </div>

              {/* Read More Button */}
              <button
                className="flex items-center justify-center w-full max-w-[90px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] h-[30px] sm:h-[32px] md:h-[36px] lg:h-[40px] px-1 py-1 gap-2 rounded-lg bg-[#062254] font-medium text-white hover:bg-[#071731] transition-all duration-200 text-[10px] sm:text-xs md:text-sm lg:text-base"
                onClick={() => navigate("/blogPage")}
              >
                Read More
              </button>
            </div>
          </div>

          {/* Right Side Content - Hidden on mobile, visible on larger screens */}
          <div className="hidden sm:block lg:block mr-0 sm:mr-4 md:mr-6 lg:mr-10 w-full sm:w-auto">
            <div className="w-full sm:w-[480px] md:w-[520px] lg:w-[649px] h-auto sm:min-h-[280px] md:min-h-[320px] lg:h-[348px] rounded-[16px] border bg-[#041C47]/30 p-4 sm:p-6 md:p-8 lg:p-10">
              <div className="w-full sm:max-w-[450px] md:max-w-[500px] lg:w-[728px] h-auto min-h-[120px] sm:min-h-[150px] md:min-h-[180px] lg:h-[208px] gap-3 sm:gap-4 md:gap-5 lg:gap-[24px] text-white m-3 sm:m-4 md:m-6 lg:m-10">
                <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-8">
                  <div>
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-semibold leading-tight">
                      Lorem Ipsum is simply <br /> dummy text of the <br />{" "}
                      printing
                    </h1>
                  </div>
                  <div className="w-full sm:max-w-[380px] md:max-w-[420px] lg:w-[513px] h-auto min-h-[60px] sm:min-h-[70px] md:min-h-[80px] lg:h-[96px]">
                    <p className="text-xs sm:text-sm md:text-base lg:text-base leading-relaxed">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightOfWeek;
