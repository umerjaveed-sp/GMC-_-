import React from "react";
import prepration from "../../assets/services/prepration.jpg";

const Application = () => {
  const steps = [
    {
      number: 1,
      title: "Document Collection",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
      number: 2,
      title: "Application Submission",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
      number: 3,
      title: "Interview Prep",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
    {
      number: 4,
      title: "Final Admission",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    },
  ];

  return (
    <section className="w-auto h-auto py-[48px] gap-10 ">
      <div className="mx-20 gap-[28px] space-y-5">
        <div className="mb-10">
          <div className="flex items-center justify-center flex-col space-y-2">
            <h1 className="text-[40px] font-bold">
              Application & Admission Support
            </h1>
            <h1 className="text-gray-800 text-[20px]">
              Boost your test scores with experts resources
            </h1>
          </div>
        </div>

        <div className="flex gap-[65px]">
          <div className="w-[608px] h-auto gap-6  space-y-5">
            <div className="bg-cover bg-center bg-no-repeat w-[608px] h-[405.83px] mt-5">
              <img src={prepration} className="rounded-[9.75px]" alt="" />
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
                    Free Practice Resources
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
                    Personalized Test Strategies
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
                    Tips from Certified Trainers
                  </h1>
                  <p className="text-sm leading-relaxed text-gray-500">
                    {" "}
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <button className="self-start bg-[#74BF1A] hover:bg-[#6aaa1c] text-white text-sm font-semibold rounded-lg px-5 py-3 transition-colors">
              Book a free consultation
            </button>
          </div>
          <div className="  w-auto h-[740px] rounded-2xl p-6 gap-6 bg-white  mt-5">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {" "}
              Process Timeline
            </div>
            <div className=" py-8 ">
              {steps.map((step, i) => (
                <div key={step.number} className="flex">
                  {/* Number + connecting line */}
                  <div className="flex flex-col items-center mr-5 ">
                    <div className="w-[65px] h-[65px] shrink-0 rounded-full bg-[#74BF1A] text-white flex items-center justify-center text-2xl font-semibold">
                      {step.number}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-[2px] flex-1  bg-gray-500" />
                    )}
                  </div>

                  {/* Text content */}
                  <div className={i < steps.length - 1 ? "pb-[61px]" : ""}>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
