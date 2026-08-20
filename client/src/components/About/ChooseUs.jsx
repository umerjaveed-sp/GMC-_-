import React from "react";
import boy from "../../assets/about/boy.png";
import tower from "../../assets/about/tower.jpg";
import coster from "../../assets/about/coster.jpg";
import building from "../../assets/about/building.jpg";

const ChooseUs = () => {
  const courseSelectionData = [
    {
      title: "Free Career Counseling",
      p: "Get one-on-one guidance from certified counselors to identify the right course and career path for you.",
    },
    {
      title: "University Shortlisting",
      p: "We help you shortlist universities based on your budget, academic profile, and career goals.",
    },
    {
      title: "Application Assistance",
      p: "Get end-to-end support with your applications, SOPs, LORs, and documentation for a hassle-free process.",
    },
    {
      title: "Visa Guidance",
      p: "Receive expert assistance with visa documentation, interview preparation, and approval process.",
    },
    {
      title: "Scholarship Support",
      p: "Explore scholarship opportunities and get help applying to reduce your overall study cost abroad.",
    },
    {
      title: "Pre-Departure Briefing",
      p: "Attend sessions covering accommodation, travel, culture, and everything you need before you fly.",
    },
  ];
  return (
    <section className="w-auto h-[979px] py-[48px] gap-[16px] ">
      <div className="flex items-center justify-center flex-col  space-y-5">
        <h1 className="text-gray-800 text-[40px] font-bold">
          Why Choose <span className="text-[#5FA016] ">Us</span> ?
        </h1>
        <p className="text-gray-500  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="w-[1238px] h-[767px] gap-[63px]  mx-12 mt-2 flex">
        <div className="w-[60%] h-auto flex relative">
          <div className="w-[70%] h-full     ">
            <img
              src={boy}
              className=" w-[498px] h-[767px] object-cover object-[75%_top]  "
              alt=""
            />
          </div>
          <div className=" w-[272px] h-[182px]  absolute top-[38px] left-[364px] rounded-[16px]">
            <img src={tower} className="object-cover rounded-[16px]" alt="" />
          </div>
          <div className=" w-[208px] h-[312px]  absolute top-[228px] left-[469px] rounded-[16px]">
            <img src={coster} className="object-cover rounded-[16px]" alt="" />
          </div>
          <div className=" w-[290px] h-[193px] absolute top-[548px] left-[364px] ">
            <img
              src={building}
              className="object-cover rounded-[16px]"
              alt=""
            />
          </div>
        </div>

        <div className="w-[40%] h-[522px] gap-[24px]   my-28 flex flex-col ">
          {courseSelectionData.map((item) => (
            <>
              <div className="flex gap-2">
                <div className=" flex items-center justify-center w-10 h-10 ">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-[30px] text-[#5FA016] "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="">
                  <h1 className="text-xl font-bold text-gray-800">
                    {item.title}
                  </h1>
                  <p className="text-gray-600">{item.p}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
