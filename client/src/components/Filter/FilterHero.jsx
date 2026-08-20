import React from "react";
import skyline from "../../assets/filters/skyline2.jpg";

const FilterHero = () => {
  return (
    <div className="mt-[70px]">
      <div
        className="w-auto h-[552px]  bg-slate-600  bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${skyline})` }}
      >
        <div className="text-white flex items-center flex-col justify-center text-[56px] font-semibold">
          {" "}
          <div>Explore Thousands of Programs</div>
          <div>across the World </div>
        </div>
      </div>
    </div>
  );
};

export default FilterHero;
