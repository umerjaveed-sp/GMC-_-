import React from "react";
import prepration from "../../assets/services/prepration.jpg";

const Prepration = () => {
  return (
    <section className="w-auto h-auto py-[48px] gap-10 ">
      <div className="mx-20 gap-[28px] space-y-5">
        <div className="mb-10">
          <div className="flex items-center justify-center flex-col space-y-2">
            <h1 className="text-[40px] font-bold">Scholarship Assistance</h1>
            <h1 className="text-gray-800 text-[20px]">
              Guidance to find & apply for scholarships that match your goals
            </h1>
          </div>
        </div>

        <div className="flex gap-[65px]">
          <div className="w-[608px] h-auto gap-6  space-y-5">
            <div className="bg-cover bg-center bg-no-repeat w-[608px] h-[405.83px]">
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
          <div className=" w-[566px] h-[655px] gap-[24px] ">
            <div className="space-y-10 w-[566px] h-[587px] rounded-[16px] border-[0.5px] pt-8 px-4 pb-8 gap-8 bg-white ">
              <h2 className="text-3xl font-bold text-neutral-900">
                Have Questions? Get in <br /> Touch!
              </h2>

              <form className="mt-6 space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-lg border outline-none px-4 py-3 text-sm text-neutral-700 placeholder-neutral-400 "
                />

                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full rounded-lg border px-4  outline-none py-3 text-sm text-neutral-700 placeholder-neutral-400 "
                />

                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full resize-none rounded-lg border px-4 py-3 text-sm text-neutral-700 placeholder-neutral-400 outline-none"
                />
              </form>

              <div className="">
                <button className="w-[168px] h-11 bg-[#74BF1A] hover:bg-[#6aaa1c] text-white text-sm font-semibold rounded-lg transition-colors">
                  Send Inquery
                </button>
              </div>
            </div>
            <div className="w-[550px] h-[44px]  mt-5 flex items-center justify-center cursor-pointer">
              <div className="text-[#092962] font-semibold underline">
                IELTS/PTE Sample PDF
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prepration;
