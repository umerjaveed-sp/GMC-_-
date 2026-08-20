import React from "react";
import boy from "../../assets/destinations/boy.jpg";

const HelpingYou = () => {
  return (
    <section className="w-auto h-auto bg-white py-10 ">
      <div className="mx-20">
        <div className="w-auto h-auto   space-y-5 flex gap-8">
          <div className="w-[500px] h-auto  px-2 flex flex-col space-y-2 ">
            <h1 className="text-[32px] font-semibold">
              Helping You Choose A Top Study Destination?
            </h1>
            <p className="text-sm leading-relaxed text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in
            </p>
            <div className="flex  gap-5">
              <div className="w-[30px] h-[30px] mt-1 flex-shrink-0  bg-[#74BF1A] rounded-full flex items-center justify-center">
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
                  Global Perspective
                </h1>
                <p className="text-sm leading-relaxed text-gray-500">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="flex gap-5 ">
              <div className="w-[30px] h-[30px] mt-1  flex-shrink-0 bg-[#74BF1A] rounded-full flex items-center justify-center">
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
                  High-Quality Education
                </h1>
                <p className="text-sm leading-relaxed text-gray-500">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-[30px] h-[30px] mt-1  flex-shrink-0 bg-[#74BF1A] rounded-full flex items-center justify-center">
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
                  Language Skills
                </h1>
                <p className="text-sm leading-relaxed text-gray-500">
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className=" rounded-[9.75px] w-[702px] h-[477px] mt-5 overflow-hidden flex-shrink-0">
            <img
              src={boy}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpingYou;
