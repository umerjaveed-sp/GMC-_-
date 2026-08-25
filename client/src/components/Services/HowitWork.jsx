import React from "react";
import earth from "../../assets/services/earth.png";
import universty from "../../assets/services/universty1.png";
import task from "../../assets/services/completedtask.png";

const HowitWork = () => {
  return (
    <section className="w-auto h-auto bg-white relative  ">
      <div className=" lg:py-12 md:py-10 sm:py-8 py-6 gap-[10px] mx-20  ">
        <div className="">
          <h1 className="text-gray-800 font-bold text-[20px] sm:text-[22px] md:text-[25px]">
            How it Work ?
          </h1>
        </div>
        <div className="">
          <svg
            viewBox="0 0 456 65.67"
            className="lg:w-[25rem] lg:h-[15rem] lg:block absolute  lg:top-[50px] lg:left-[200px]
            md:w-[15rem] md:h-[15rem] md:top-[60px] md:block md:left-[170px] sm:w-[11rem] sm:h-[6rem]  sm:left-[180px] sm:block sm:top-[80px] hidden
            "
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <marker
                id="arrowhead"
                markerWidth="8"
                markerHeight="8"
                refX="4"
                refY="4"
                orient="auto"
              >
                <path d="M0,0 L8,4 L0,8 Z" className="fill-lime-500" />
              </marker>
            </defs>

            <path
              d="M10,55.67 Q228,-44.33 446,55.67"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="15 15"
              strokeLinecap="round"
              className="text-lime-500"
              markerEnd="url(#arrowhead)"
            />
          </svg>
          <div className="flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap items-center gap-4 sm:gap-6 md:gap-8 justify-center md:justify-between mt-[20px] sm:mt-[60px] md:mt-[120px]">
            <div className="lg:w-[285px] lg:h-[195px] md:w-[230px] md:h-[150px] rounded-[8px] py-6 px-4 gap-4 bg-[#092962] flex items-center justify-center flex-col">
              <div
                className="lg:w-[73px] lg:h-[73px] md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px] w-[25px] h-[25px]
              "
              >
                <img src={earth} alt="" />
              </div>
              <div className="lg:text-[20px] md:text-[15px]  text-[13px] text-[#74BF1A]">
                Search by Country,
                <br /> Degree, Funding
              </div>
            </div>
            <div className="lg:w-[285px] lg:h-[195px] md:w-[230px] md:h-[150px] rounded-[8px] py-6 px-4 gap-4 bg-[#092962] flex items-center justify-center flex-col">
              <div className="lg:w-[73px] lg:h-[73px] md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px] w-[25px] h-[25px] ">
                <img src={universty} alt="" />
              </div>
              <div className="lg:text-[20px] md:text-[15px] text-[13px] text-[#74BF1A]">
                Search by Country,
                <br /> Degree, Funding
              </div>
            </div>
            <div className="lg:w-[285px] lg:h-[195px] md:w-[230px] md:h-[150px] rounded-[8px] py-6 px-4 gap-4 bg-[#092962] flex items-center justify-center flex-col">
              <div className="lg:w-[73px] lg:h-[73px] md:w-[60px] md:h-[60px] sm:w-[40px] sm:h-[40px] w-[25px] h-[25px]">
                <img src={task} alt="" />
              </div>
              <div className="lg:text-[20px] md:text-[15px] text-[13px] text-[#74BF1A]">
                Search by Country,
                <br /> Degree, Funding
              </div>
            </div>
          </div>
          <div className="relative w-full bg-white" style={{ height: "100px" }}>
            <svg
              viewBox="0 0 456 65.67"
              className="absolute  lg:block lg:w-[25rem] lg:h-[5rem] lg:left-[600px] lg:top-0  
            md:w-[15rem] md:h-[3rem] md:block md:top-0 md:left-[350px] sm:w-[11rem] sm:h-[2rem]  sm:left-[270px] sm:top-[0px] sm:block hidden"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <marker
                  id="arrowhead-down"
                  markerWidth="8"
                  markerHeight="8"
                  refX="4"
                  refY="4"
                  orient="auto"
                >
                  <path d="M0,0 L8,4 L0,8 Z" className="fill-lime-500" />
                </marker>
              </defs>

              <path
                d="M10,10 Q228,110 446,10"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="15 15"
                strokeLinecap="round"
                className="text-lime-500"
                markerEnd="url(#arrowhead-down)"
              />
            </svg>
          </div>
        </div>

        <div className="">
          <h1 className="text-gray-800   text-[16px]">
            *Already helped 500+ students secure scholarships worldwide
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HowitWork;
