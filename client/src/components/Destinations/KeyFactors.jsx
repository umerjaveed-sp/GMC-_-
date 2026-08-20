import React from "react";
import girl from "../../assets/destinations/girl.jpg";

const KeyFactors = () => {
  return (
    <section className="w-auto h-auto bg-white  ">
      <div className="mx-20 py-10">
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
          <div className="bg-cover bg-center bg-no-repeat rounded-[9.75px] w-[708px] h-[472px] mt-5 overflow-hidden flex-shrink-0">
            <img
              src={girl}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="pt-16 pb-8 bg-gray-100 flex items-center justify-center ">
        <div className="space-y-5">
          <h1 className="text-[24px] font-semibold text-[#062254]">
            For further help, book a call now!
          </h1>
          <div className="flex items-center justify-center">
            <div className="w-[163px] h-[44px] bg-[#74BF1A] rounded-[8px] flex justify-center items-center text-white  text-[16px] font-semibold">
              <div>Talk to an Expert</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFactors;
