import React from "react";
import FilterHero from "./FilterHero";
import FilterCards from "./FilterCards";

const FilterUniversties = () => {
  return (
    <>
      <div className="">
        {/* Hero */}
        <FilterHero />
        {/* Cards */}
        <FilterCards />
      </div>
    </>
  );
};

export default FilterUniversties;
