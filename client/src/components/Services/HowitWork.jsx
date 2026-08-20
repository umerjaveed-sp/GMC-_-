import React from "react";
import earth from "../../assets/services/earth.png";
import universty from "../../assets/services/universty1.png";
import task from "../../assets/services/completedtask.png";

const HowitWork = () => {
  return (
    <section className="w-auto h-auto bg-white relative  ">
      <div className=" py-12 gap-[10px] mx-20  ">
        <div className="">
          <h1 className="text-gray-800  font-bold text-[25px]">
            How it Work ?
          </h1>
        </div>
        <div className="">
          <svg
            viewBox="0 0 456 65.67"
            className="w-[456px] h-[65.67px] absolute top-[130px] left-[200px]"
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
          <div className="flex items-center justify-between mt-[120px]">
            <div className="w-[285px] h-[195px] rounded-[8px] py-6 px-4 gap-4 bg-[#092962] flex items-center justify-center flex-col">
              <div className="w-[73px] h-[73px] ">
                <img src={earth} alt="" />
              </div>
              <div className="text-[20px] text-[#74BF1A]">
                Search by Country,
                <br /> Degree, Funding
              </div>
            </div>
            <div className="w-[285px] h-[195px] rounded-[8px] py-6 px-4 gap-4 bg-[#092962] flex items-center justify-center flex-col">
              <div className="w-[73px] h-[73px] ">
                <img src={universty} alt="" />
              </div>
              <div className="text-[20px] text-[#74BF1A]">
                Search by Country,
                <br /> Degree, Funding
              </div>
            </div>
            <div className="w-[285px] h-[195px] rounded-[8px] py-6 px-4 gap-4 bg-[#092962] flex items-center justify-center flex-col">
              <div className="w-[73px] h-[73px] ">
                <img src={task} alt="" />
              </div>
              <div className="text-[20px] text-[#74BF1A]">
                Search by Country,
                <br /> Degree, Funding
              </div>
            </div>
          </div>
          <div className="relative w-full bg-white" style={{ height: "100px" }}>
            <svg
              viewBox="0 0 456 65.67"
              className="absolute"
              style={{
                width: "456px",
                height: "65.67px",
                left: "600px",
                top: "10px",
              }}
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
