import React from "react";

const LauguageCourses = () => {
  const coursesData = [
    { title: "IELTS Preparation" },
    { title: "TOFEL Preparation" },
    { title: "German Test Preparation" },
    { title: "GMAT Preparation" },
    { title: "GRE Preparation" },
    { title: "PTE Preparation" },
  ];
  return (
    <section className="bg-white px-16 py-10 mb-32">
      <div>
        <div className="mb-10">
          <div className="flex items-center justify-center flex-col space-y-2">
            <h1 className="text-[40px] font-bold">Language Courses</h1>
            <h1 className="text-gray-800 text-[20px]">
              Boost your test scores with experts resources
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full pr-8">
          {coursesData.map((course, index) => (
            // YOUR EXACT CARD HTML STARTS HERE
            <div
              key={index}
              className="bg-[#C0F283] rounded-[16px] shadow-lg overflow-hidden w-[394px] h-[391px] p-5 gap-2 flex flex-col"
            >
              {/* Content Section */}
              <div className="space-y-2 flex-1 flex flex-col mt-2">
                <div className="space-y-2">
                  <h3 className="text-[24px] text-[#092962] font-bold">
                    {course.title}
                  </h3>
                  <p className="text-[12px] text-[#605D64] leading-relaxed line-clamp-3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </p>
                </div>

                {/* Event Details */}
                <div className="flex-1 space-y-5 py-4">
                  <div className="flex gap-2 items-center">
                    <div className="w-[24px] h-[24px] bg-[#092962] rounded-full flex items-center justify-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-3.5 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-[16px] text-[#092962] font-medium">
                      Key features of this Package
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-[25px] h-[25px] bg-[#092962] rounded-full flex items-center justify-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-[16px] text-[#092962] font-medium">
                      Key features of this Package
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-[25px] h-[25px] bg-[#092962] rounded-full flex items-center justify-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-[16px] text-[#092962] font-medium">
                      Key features of this Package
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="w-[25px] h-[25px] bg-[#092962] rounded-full flex items-center justify-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-[16px] text-[#092962] font-medium">
                      Key features of this Package
                    </div>
                  </div>
                </div>

                {/* Register Button */}
                <button className="flex items-center justify-center w-full max-w-[120px] h-[44px] px-1 py-1 gap-2 rounded-lg bg-[#092962] font-medium text-white transition-all duration-200">
                  Enroll Now
                </button>
              </div>
            </div>
            // YOUR EXACT CARD HTML ENDS HERE
          ))}
        </div>
      </div>
    </section>
  );
};

export default LauguageCourses;
