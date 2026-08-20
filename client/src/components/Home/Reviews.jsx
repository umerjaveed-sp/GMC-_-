import React from "react";
import comma from "../../assets/home/comma.png";
import profile from "../../assets/home/profile.jpg";

const Reviews = () => {
  return (
    <section className="w-full h-auto gap-8 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 my-8 md:my-12">
      {/* Header Section */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 flex-col">
        <div>
          <h1 className="text-xl sm:text-2xl text-[#021A54] font-semibold">
            Testimonial
          </h1>
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
            Study Abroad
          </h1>
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 text-center">
            Study Abroad
          </h1>
        </div>
        <div>
          <p className="text-sm sm:text-base text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
      </div>

      {/* Main Reviews Grid */}
      <div className="w-full h-auto mt-6 sm:mt-8 flex flex-col lg:flex-row gap-4 sm:gap-5">
        {/* Left Card - Full width on mobile, 40% on lg */}
        <div className="w-full lg:w-[40%] h-auto min-h-[300px] sm:min-h-[400px] lg:h-[603px] rounded-[8px] shadow-lg bg-white flex items-start justify-between flex-col p-4 sm:p-5 text-gray-800">
          <div className="space-y-3 sm:space-y-5 mx-0 sm:mx-5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Canada
            </h1>
            <h1 className="text-xl sm:text-2xl font-semibold">
              Arts & Humanities
            </h1>
            <div className="mt-3 sm:mt-5">
              <p className="text-sm sm:text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                iure asperiores atque quisquam quibusdam. Doloremque animi saepe
                aliquam distinctio maxime, officiis harum cumque in est
                doloribus, adipisci, beatae temporibus iure.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 pb-4 sm:pb-8">
            <div>
              <img
                src={profile}
                className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                alt=""
              />
            </div>
            <div>
              <h1 className="text-base sm:text-xl font-semibold">
                Reviewer Name
              </h1>
              <p className="text-sm sm:text-base">University Name</p>
            </div>
          </div>
        </div>

        {/* Right Section - Full width on mobile, 60% on lg */}
        <div className="w-full lg:w-[60%] h-auto">
          {/* Top Card */}
          <div className="w-full h-auto min-h-[200px] sm:min-h-[250px] lg:h-[318px] bg-white rounded-[8px] flex items-start justify-between flex-col p-4 sm:p-5 text-gray-800 shadow-lg">
            <div className="space-y-3 sm:space-y-5">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                Canada
              </h1>
              <h1 className="text-xl sm:text-2xl font-semibold">
                Arts & Humanities
              </h1>
              <div className="mt-3 sm:mt-5">
                <p className="text-sm sm:text-base">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                  iure asperiores atque quisquam quibusdam. Doloremque animi
                  saepe aliquam distinctio maxime, officiis harum cumque in est
                  doloribus, adipisci, beatae temporibus iure.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 pb-4 sm:pb-8">
              <div>
                <img
                  src={profile}
                  className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-base sm:text-xl font-semibold">
                  Reviewer Name
                </h1>
                <p className="text-sm sm:text-base">University Name</p>
              </div>
            </div>
          </div>

          {/* Bottom Two Cards */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-4">
            {/* Left Bottom Card */}
            <div className="w-full sm:w-1/2 h-auto min-h-[200px] sm:h-[269px] rounded-[8px] shadow-lg bg-white flex items-start justify-between flex-col p-4 sm:p-5 text-gray-800">
              <div className="space-y-3 sm:space-y-5">
                <div className="mt-3 sm:mt-5">
                  <p className="text-sm sm:text-base">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quas iure asperiores atque quisquam quibusdam. Doloremque
                    animi saepe
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 pb-4">
                <div>
                  <img
                    src={profile}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="text-base sm:text-xl font-semibold">
                    Reviewer Name
                  </h1>
                  <p className="text-sm sm:text-base">University Name</p>
                </div>
              </div>
            </div>

            {/* Right Bottom Card - Dark */}
            <div className="w-full sm:w-1/2 h-auto min-h-[200px] sm:h-[269px] rounded-[8px] shadow-lg bg-[#021A54] flex items-start justify-between flex-col p-4 sm:p-5 text-white">
              <div className="space-y-3 sm:space-y-5">
                <div className="mt-3 sm:mt-5">
                  <p className="text-sm sm:text-base">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quas iure asperiores atque quisquam quibusdam. Doloremque
                    animi saepe aliquam
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 pb-4">
                <div>
                  <img
                    src={profile}
                    className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="text-base sm:text-xl font-semibold">
                    Reviewer Name
                  </h1>
                  <p className="text-sm sm:text-base text-gray-300">
                    University Name
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-5 sm:mt-8 flex flex-row  sm:flex-row items-center justify-between py-4 sm:py-5 gap-4 sm:gap-0">
        <div className="flex flex- sm:flex-col items-center gap-4 sm:gap-2   md:gap-4 w-full sm:w-auto">
          <div className="text-base sm:text-lg font-bold text-gray-800 text-center sm:text-left">
            1500 Satisfied Client
          </div>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 sm:size-6 text-[#021A54]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                />
              </svg>
            </div>
            <div className="items-center gap-2">
              <div className="flex justify-center sm:justify-start">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#021A54] fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#021A54] fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#021A54] fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#021A54] fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#021A54] fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <linearGradient id="halfStar">
                      <stop offset="90%" stop-color="currentColor" />
                      <stop offset="90%" stop-color="#e5e7eb" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    fill="url(#halfStar)"
                  />
                </svg>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
                <h1 className="text-base sm:text-lg font-semibold text-gray-900">
                  4.9
                </h1>
                <h1 className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
                  Based on 1.5k reviews
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[#021A54] font-semibold text-sm sm:text-base cursor-pointer hover:underline">
          View All Reviews →
        </div>
      </div>
    </section>
  );
};

export default Reviews;
