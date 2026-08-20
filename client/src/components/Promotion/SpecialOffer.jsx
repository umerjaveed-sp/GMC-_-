import React from "react";
import Ieltsgirl from "../../assets/ielts/Ieltsgirls.jpg";

const SpecialOffer = () => {
  return (
    <section className="px-[80px]   mb-10 ">
      {/* Heading */}
      <div>
        <div className="flex items-center justify-center flex-col space-y-2 mt-10 mb-16">
          <h1 className="text-[40px] font-semibold text-[#322F35]">
            Special Offer for September Intake
          </h1>
          <h1 className="text-[#48464C] font-medium   text-[16px]">
            Guidance to find & apply for scholarships that match your goals
          </h1>
        </div>
      </div>
      {/* Content  */}

      <div className="flex gap-[65px] mx-[80px]   ">
        <div className="w-[471px] h-[706px]  ">
          <img
            src={Ieltsgirl}
            className="object-cover rounded-[11px] "
            alt=""
          />
        </div>

        <div className="w-auto h-[564px] gap-[48px]  flex items-center justify-center">
          <div className="w-[500px] h-auto   px-2 flex-col space-y-2 ">
            <h1 className="text-[32px] font-semibold text-[#1D1B20]">
              We are here to help you:
            </h1>
            <p className="text-sm leading-relaxed text-[#605D64]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an
            </p>
            <div className="pl-2 space-y-5">
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
                  <h1 className="text-[#322F35] font-bold text-[20px] ">
                    {" "}
                    Flat 30% Discount on Consultancy Fee
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
                <div className="">
                  <h1 className="text-[#322F35] font-bold text-[20px]">
                    {" "}
                    Free Application Processing
                  </h1>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              <div className="flex gap-5">
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
                  <h1 className="text-[#322F35] font-bold text-[20px]">
                    {" "}
                    Free Visa Interview Preparation
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

export default SpecialOffer;
