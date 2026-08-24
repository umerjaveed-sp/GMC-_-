import React from "react";

const Search = () => {
  return (
    <section className="w-auto h-auto sm:h-[137px] bg-white flex items-center justify-center py-4 sm:py-0">
      <div className="pt-4 sm:pt-[30px] md:pt-[38px] lg:pt-[48px] pb-3 sm:pb-[18px] md:pb-[20px] lg:pb-[24px] gap-2 sm:gap-2.5 md:gap-3 lg:gap-[10px] flex flex-row items-center px-3 sm:px-4 md:px-5 lg:px-0">
        {/* Search Input Container */}
        <div className="w-[200px] sm:w-[280px] md:w-[350px] lg:w-[420px] xl:w-[470px] h-[38px] sm:h-[44px] md:h-[50px] lg:h-[55px] xl:h-[65px] rounded-[32px] bg-[#FAFAFA] border border-gray-200 flex items-center px-3 sm:px-4 lg:px-5 shadow-lg">
          <input
            type="text"
            placeholder="Search Blog Here ...... "
            className="w-full h-full bg-transparent outline-none text-xs sm:text-sm md:text-base lg:text-base text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Search Button */}
        <div className="flex items-center justify-center w-[36px] sm:w-[42px] md:w-[48px] lg:w-[55px] xl:w-[65px] h-[36px] sm:h-[42px] md:h-[48px] lg:h-[55px] xl:h-[65px] bg-[#092962] rounded-full hover:bg-[#0c2044] transition-all duration-200 cursor-pointer flex-shrink-0">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-[14px] sm:size-[16px] md:size-[18px] lg:size-[20px] xl:size-[24px] text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
