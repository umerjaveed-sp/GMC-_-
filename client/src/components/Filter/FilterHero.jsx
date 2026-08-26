import React from "react";
import skyline from "../../assets/filters/skyline2.jpg";

const FilterHero = () => {
  return (
    <div className="mt-[30px] md:mt-[70px]">
      <div
        className="w-auto  min-h-[300px] md:min-h-[400px] lg:h-[552px] bg-slate-600 bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{ backgroundImage: `url(${skyline})` }}
      >
        <div className="text-white flex items-center flex-col justify-center text-center">
          <div className="text-[22px] sm:text-[36px] md:text-[44px] lg:text-[56px] font-semibold leading-tight">
            Explore Thousands of Programs
          </div>
          <div className="text-[22px] sm:text-[36px] md:text-[44px] lg:text-[56px] font-semibold leading-tight">
            across the World
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterHero;
