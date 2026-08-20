import React, { useState } from "react";

import women from "../../assets/filters/women.jpg";

import FilterHero from "./FilterHero";
import FilterCards from "./FilterCards";

const CoursesFilter = ({ label, options, icon, align = "left" }) => {
  return (
    <section className="mt-16">
      {/* Hero */}

      <FilterHero />

      {/* Art and Humanities  */}

      <div className="w-auto h-[429px]  px-16 bg-white flex items-center justify-center gap-[32px]">
        <div className="w-[710px] h-[232px] space-y-5">
          <div className=" text-[#1D1B20] space-y-5 ">
            <h1 className="text-[40px] font-semibold"> Art & Humanities</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic
            </p>
          </div>
          <div className="w-[120px] h-[44px] rounded-[8px] bg-[#092962] text-white flex items-center justify-center text-[16px] font-semibold">
            <div>Read More</div>
          </div>
        </div>
        <div className="w-[500px] h-[333px] ">
          <img src={women} className="object-cover  rounded-[16px]" alt="" />
        </div>
      </div>
      {/* Course Filters */}
      <FilterCards />
    </section>
  );
};

export default CoursesFilter;
