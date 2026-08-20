import React from "react";

const HotOffers = () => {
  const cardLength = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];
  return (
    <section className="px-[80px] py-[10] bg-white">
      <div className="flex items-center justify-center flex-col space-y-2 mt-10 mb-16">
        <div className="flex items-center justify-center flex-col space-y-2 mt-10 ">
          <h1 className="text-[40px] font-semibold text-[#322F35]">
            Hot Offers
          </h1>
          <h1 className="text-[#48464C] font-medium   text-[16px]">
            Guidance to find & apply for scholarships that match your goals
          </h1>
        </div>
      </div>

      {/* Content  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[32px] justify-items-center pb-16">
        {cardLength.map((item) => (
          <div key={item.id}>
            <div className="w-[286px] h-[321px] rounded-[8px] border border-t-[4px] border-[#092962] bg-white shadow-lg border-l-0 border-r-0 border-b-0 ">
              <div className=" space-y-3">
                <div className="font-bold text-[16px] text-[#48464C] ml-5 pt-3 ">
                  🇨🇦 Study in Canada Offer
                </div>
                <div className="font-bold text-[16px] text-[#48464C] ml-5 ">
                  Consultancy Fee:{" "}
                  <span className=" text-[#FF383C] font-medium line-through decoration-2 decoration-[#FF383C]">
                    $500
                  </span>{" "}
                  →
                  <span className="ml-1  text-[#86CC31] font-medium ">
                    $300
                  </span>
                </div>

                <div className=" flex  flex-col  mx-5">
                  <div className="flex flex-col gap-3 text-[#062254] text-[12px]">
                    <div className="flex gap-1   items-center">
                      <div className="w-[18px] h-[18px] mt-1 flex-shrink-0  bg-[#092962] rounded-full flex items-center justify-center">
                        <div className="">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-3 text-white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="items-center ">Admistion Assistance </div>
                    </div>
                    <div className="flex gap-1  items-center">
                      <div className="w-[18px] h-[18px] mt-1 flex-shrink-0  bg-[#092962] rounded-full flex items-center justify-center">
                        <div className="">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-3 text-white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="items-center">Admistion Assistance </div>
                    </div>
                    <div className="flex gap-1  items-center">
                      <div className="w-[18px] h-[18px] mt-1 flex-shrink-0  bg-[#092962] rounded-full flex items-center justify-center">
                        <div className="">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-3 text-white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="items-center">Admistion Assistance </div>
                    </div>
                    <div className="flex gap-1  items-center">
                      <div className="w-[18px] h-[18px] mt-1 flex-shrink-0  bg-[#092962] rounded-full flex items-center justify-center">
                        <div className="">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-3 text-white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="items-center">Admistion Assistance </div>
                    </div>
                    <div className="flex gap-1  items-center">
                      <div className="w-[18px] h-[18px] mt-1 flex-shrink-0  bg-[#092962] rounded-full flex items-center justify-center">
                        <div className="">
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-3 text-white"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m4.5 12.75 6 6 9-13.5"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="items-center">Admistion Assistance </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex justify-center  items-center gap-2 mx-5">
                <div className="w-[114px] h-[38px] flex justify-center  items-center rounded-[4px] shadow-lg cursor-pointer bg-[#98D94A] text-[white]">
                  Claim Now
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotOffers;
