import React from "react";
import career from "../../assets/services/career.jpg";

const CareerCounstling = () => {
  return (
    <section className="w-auto h-auto py-[48px] gap-10 bg-white ">
      <div className="mx-20 gap-[28px] space-y-5">
        <div className="mb-10">
          <div className="flex items-center justify-center flex-col space-y-2">
            <h1 className="text-[40px] font-bold">
              Career Counseling & Consultation
            </h1>
            <h1 className="text-gray-800 text-[20px]">
              Helping you choose the right country, university and program for
              your future success
            </h1>
          </div>
        </div>

        <div className="flex gap-[65px]">
          <div className=" w-[566px] h-[655px] gap-[24px]  ">
            <div className="space-y-10 w-[566px] h-auto rounded-[16px] border-[0.5px] pt-8 px-4 pb-8 gap-8 bg-gray-100 ">
              <h2 className="text-3xl font-bold text-neutral-900">
                Book Your Counseling <br />
                session with us.
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

                <div className="relative">
                  <select className="w-full h-[52px] appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 text-sm text-gray-400 outline-none cursor-pointer">
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
                    className="size-4 pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
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
                  rows={6}
                  className="w-full resize-none rounded-lg border px-4 py-3 text-sm text-neutral-700 placeholder-neutral-400 outline-none"
                />
              </form>

              <div className="">
                <button className="w-[168px] h-11 bg-[#74BF1A] hover:bg-[#6aaa1c] text-white text-sm font-semibold rounded-lg transition-colors mb-5">
                  Send Inquery
                </button>
              </div>
            </div>
          </div>
          <div className="w-[608px] h-auto gap-6  space-y-5">
            <div className="bg-cover bg-center bg-no-repeat w-auto h-auto mb-10">
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
                    Country Selection Guidance
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
                    University Matching
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
                    Program Recommendations
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
        </div>
      </div>
    </section>
  );
};

export default CareerCounstling;
