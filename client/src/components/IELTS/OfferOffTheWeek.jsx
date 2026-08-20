import React from "react";
import offerbg from "../../assets/ielts/offerbg.jpg";
import webenar from "../../assets/events/webenar.jpg";
import { useNavigate } from "react-router-dom";

const OfferOfTheWeek = () => {
  const nevigate = useNavigate();
  return (
    <section className="w-auto h-auto mt-10">
      <div className="pt-12 pb-12 mx-20">
        <div className="flex items-center justify-between">
          <div className="text-gray-800 font-bold text-[35px]">
            Offer of the Week
          </div>
          <div className="w-[119px] h-[44px] bg-[#74BF1A] rounded-[8px] flex items-center justify-center text-white  font-semibold">
            <div> View More</div>
          </div>
        </div>
        <div
          className="w-auto  h-[600px] bg-cover bg-center bg-no-repeat rounded-[16px] mt-10 relative p-5 flex items-center justify-between"
          style={{ backgroundImage: `url(${offerbg})` }}
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-[394px] h-[557px]   p-5 gap-2 flex flex-col ">
            {/* Image Section */}
            <div className="rounded-[8px] flex items-center justify-center w-auto h-auto border ">
              <img
                src={webenar}
                className="w-[366px] h-[205px] rounded-[12px] object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="space-y-2  flex-1 flex flex-col mt-2">
              <div className="space-y-2">
                <h3 className="text-[25px] text-[#322F35] font-bold">
                  Free IELTS Prepration
                </h3>
                <p className="text-sm text-[#605D64] leading-relaxed line-clamp-3">
                  Lorem ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
              </div>

              {/* Event Details */}
              <div className="flex-1 space-y-2 justify-center flex flex-col">
                <div className="flex gap-2 items-center ">
                  <div className="w-[25px] h-[25px] bg-[#74BF1A] rounded-full flex items-center justify-center">
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
                  <div className="text-[16px] text-[#605D64] font-medium">
                    Free Classes
                  </div>
                </div>
                <div className="flex gap-2 items-center ">
                  <div className="w-[25px] h-[25px] bg-[#74BF1A] rounded-full flex items-center justify-center">
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
                  <div className="text-[16px] text-[#605D64] font-medium">
                    Free Notes
                  </div>
                </div>
                <div className="flex gap-2 items-center ">
                  <div className="w-[25px] h-[25px] bg-[#74BF1A] rounded-full flex items-center justify-center">
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
                  <div className="text-[16px] text-[#605D64] font-medium">
                    Mock Test
                  </div>
                </div>
              </div>

              {/* Register Button */}
              <button className="flex items-center justify-center w-full max-w-[120px] h-[44px] px-1 py-1 gap-2 rounded-lg bg-[#74BF1A] font-medium text-white  transition-all duration-200">
                Read More
              </button>
            </div>
          </div>

          <div className="mr-10">
            {/* Content Container */}
            <div className="w-[649px] h-[348px] rounded-[16px] border bg-[#041C47]/30  ">
              <div className="w-[728px] h-[208px] gap-[24px] text-white m-10 ">
                <div className="  space-y-8">
                  <div className=" ">
                    <h1 className="text-[30px] font-semibold">
                      Lorem Ipsum is simply <br /> dummy text of the <br />{" "}
                      printing
                    </h1>
                  </div>
                  <div className="w-[513px] h-[96px]">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10 w-[1190px] h-[69px] bg-[#98D94A] text-[#17366E]  mt-16 font-bold text-[25px] flex items-center justify-center ">
          <div>Hurry! These offers are available only for a limited time.</div>
        </div>
      </div>
    </section>
  );
};

export default OfferOfTheWeek;
