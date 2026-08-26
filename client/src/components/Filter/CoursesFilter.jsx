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

      <div className="w-auto min-h-[429px] px-4 sm:px-8 md:px-12 lg:px-16 bg-white flex flex-col lg:flex-row items-center justify-center gap-[32px] py-8 lg:py-0">
        <div className="w-full lg:w-[710px] h-auto space-y-5 text-center lg:text-left">
          <div className="text-[#1D1B20] space-y-5">
            <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold">
              Art & Humanities
            </h1>
            <p className="text-sm sm:text-base px-2 sm:px-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic
            </p>
          </div>
          <div className="w-[120px] h-[44px] rounded-[8px] bg-[#092962] text-white flex items-center justify-center text-[16px] font-semibold mx-auto lg:mx-0">
            <div>Read More</div>
          </div>
        </div>
        <div className="w-full sm:w-[400px] md:w-[450px] lg:w-[500px] h-[250px] sm:h-[280px] md:h-[300px] lg:h-[333px]">
          <img
            src={women}
            className="object-cover rounded-[16px] w-full h-full"
            alt="Women in art and humanities"
          />
        </div>
      </div>
      {/* Course Filters */}
      <FilterCards />
    </section>
  );
};

export default CoursesFilter;
