import React from "react";
import career from "../../assets/services/career.jpg";

const LanguageTest = () => {
  return (
    <section className="w-auto h-auto  gap-10 my-10  ">
      <div className="mx-20 gap-[28px] space-y-5">
        <div>
          <div className="flex items-center justify-center flex-col space-y-2  mb-10">
            <h1 className="text-[40px] font-semibold text-[#322F35]">
              Ace your language test
            </h1>
            <h1 className="text-[#48464C] font-medium   text-[16px]">
              Helping you choose the right country, university and program for
              your future success
            </h1>
          </div>
        </div>

        <div className="flex gap-[28px]">
          <div className=" w-[566px] h-[655px] gap-[24px]  ">
            <div className="space-y-5 w-[566px] h-auto rounded-[16px] border-[0.5px] pt-4 px-4 pb-8 gap-8 bg-[#F5EFF7]">
              <h2 className="text-3xl font-bold text-neutral-900">
                Share Your Details Our Experts Will <br /> Contact You
              </h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full px-4 py-3 border bg-white rounded-lg outline-none placeholder-[#79767D]"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full px-4 py-3 border bg-white rounded-lg outline-none placeholder-[#79767D]"
                    />
                  </div>

                  {/* Email Address - Full Width */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border bg-white rounded-lg outline-none placeholder-[#79767D]"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border bg-white rounded-lg outline-none placeholder-[#79767D]"
                    />
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      LinkedIn
                    </label>
                    <input
                      type="url"
                      placeholder="Enter your LinkedIn URL"
                      className="w-full px-4 py-3 border bg-white rounded-lg outline-none placeholder-[#79767D]"
                    />
                  </div>

                  {/* Preferred Study Destination */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Study Destination
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 pr-12 border bg-white rounded-lg outline-none text-[#79767D] appearance-none">
                        <option value="" disabled selected>
                          Select destination
                        </option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                        <option value="canada">Canada</option>
                        <option value="australia">Australia</option>
                        <option value="germany">Germany</option>
                        <option value="france">France</option>
                      </select>
                      <svg
                        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="#79767D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Nearest Time Branch */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nearest Time Branch
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 pr-12 border bg-white rounded-lg outline-none text-[#79767D] appearance-none">
                        <option value="" disabled selected>
                          Select branch
                        </option>
                        <option value="lahore">Lahore</option>
                        <option value="karachi">Karachi</option>
                        <option value="islamabad">Islamabad</option>
                        <option value="rawalpindi">Rawalpindi</option>
                      </select>
                      <svg
                        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="#79767D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Preferred Mode of Counseling */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Mode of Counseling
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 pr-12 border bg-white rounded-lg outline-none text-[#79767D] appearance-none">
                        <option value="" disabled selected>
                          Select mode
                        </option>
                        <option value="online">Online</option>
                        <option value="in-person">In-Person</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="phone">Phone Call</option>
                      </select>
                      <svg
                        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="#79767D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Preferred Study Level */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Study Level
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 pr-12 border bg-white rounded-lg outline-none text-[#79767D] appearance-none">
                        <option value="" disabled selected>
                          Select study level
                        </option>
                        <option value="bachelors">Bachelor's</option>
                        <option value="masters">Master's</option>
                        <option value="phd">PhD</option>
                        <option value="diploma">Diploma</option>
                        <option value="certificate">Certificate</option>
                        <option value="foundation">Foundation</option>
                      </select>
                      <svg
                        className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="#79767D"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8 flex items-center justify-center">
                  <button
                    type="submit"
                    className="flex items-center justify-center w-[350px] h-[44px] px-6 py-[14px] gap-2 rounded-lg bg-[#74BF1A] text-white font-medium hover:bg-[#5FA016] transition-all duration-200"
                  >
                    Book my consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-[608px] h-auto gap-6  space-y-5">
            <div className="bg-cover bg-center bg-no-repeat w-[608px] h-[405.83px] mb-10">
              <img src={career} className="rounded-[9.75px]" alt="" />
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

            <div className="w-[500px] h-auto  px-2 flex flex-col space-y-2 ">
              <div className="flex  gap-5">
                <div className="w-[30px] h-[30px] mt-1 flex-shrink-0  bg-[#092962] rounded-full flex items-center justify-center">
                  <div className="">
                    {" "}
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
                <div>
                  <h1 className="text-gray-800 font-bold text-[20px] ">
                    {" "}
                    Test Preparation
                  </h1>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 ">
                <div className="w-[30px] h-[30px] mt-1  flex-shrink-0 bg-[#092962] rounded-full flex items-center justify-center">
                  <div className="">
                    {" "}
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
                <div>
                  <h1 className="text-gray-800 font-bold text-[20px]">
                    {" "}
                    University Matching
                  </h1>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguageTest;
