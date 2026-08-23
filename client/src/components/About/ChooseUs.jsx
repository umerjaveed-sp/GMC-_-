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
    <section className="w-auto h-auto py-[48px] gap-[16px]">
      <div className="flex items-center justify-center flex-col space-y-5">
        <h1 className="text-gray-800 text-[40px] font-bold text-center">
          Why Choose <span className="text-[#5FA016]">Us</span>?
        </h1>
        <p className="text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="w-full max-w-[1238px] mx-auto mt-2 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Side - Image Collage */}
        <div className="w-full lg:w-[60%] h-auto flex relative min-h-[500px] lg:min-h-[767px]">
          <div className="w-[70%] h-full">
            <img
              src={boy}
              className="w-full h-[500px] lg:h-[767px] object-cover object-[75%_top] rounded-lg lg:rounded-none"
              alt=""
            />
          </div>

          {/* Tower Image */}
          <div className="w-[150px] lg:w-[272px] h-[120px] lg:h-[182px] absolute top-[30px] lg:top-[38px] left-[55%] lg:left-[364px] rounded-[16px]">
            <img
              src={tower}
              className="w-full h-full object-cover rounded-[16px]"
              alt=""
            />
          </div>

          {/* Coster Image */}
          <div className="w-[130px] lg:w-[208px] h-[200px] lg:h-[312px] absolute top-[170px] lg:top-[228px] left-[58%] lg:left-[469px] rounded-[16px]">
            <img
              src={coster}
              className="w-full h-full object-cover rounded-[16px]"
              alt=""
            />
          </div>

          {/* Building Image */}
          <div className="w-[160px] lg:w-[290px] h-[130px] lg:h-[193px] absolute bottom-[30px] lg:bottom-[26px] left-[50%] lg:left-[364px] rounded-[16px]">
            <img
              src={building}
              className="w-full h-full object-cover rounded-[16px]"
              alt=""
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-[40%] h-auto lg:h-[522px] gap-[24px] py-8 lg:py-0 lg:my-28 flex flex-col px-4 lg:px-0">
          {courseSelectionData.map((item, index) => (
            <div key={index} className="flex gap-2">
              <div className="flex items-center justify-center w-10 h-10 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-[30px] text-[#5FA016]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h1>
                <p className="text-gray-600">{item.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
