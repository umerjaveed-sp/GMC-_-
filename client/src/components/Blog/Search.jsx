import React from "react";

const Search = () => {
  return (
    <section className="w-auto h-[137px] bg-white flex items-center justify-center ">
      <div className="pt-[48px] pb-[24px] gap-[10px] flex flex-row sm:flex-row md:flex-row lg:flex-row items-center">
        <div className="w-full sm:w-[380px] md:w-[420px] lg:w-[470px] h-[50px] sm:h-[55px] md:h-[60px] lg:h-[65px] rounded-[32px] bg-[#FAFAFA] border border-gray-200 flex items-center px-4 sm:px-5 lg:px-5 shadow-lg">
          <input
            type="text"
            placeholder="Search Blog Here ...... "
            className="w-full h-full bg-transparent outline-none text-sm sm:text-base lg:text-base text-gray-700 placeholder-gray-400"
          />
        </div>
        <div className="flex items-center justify-center w-[50px] sm:w-[55px] md:w-[60px] lg:w-[65px] h-[40px] sm:h-[55px] md:h-[60px] lg:h-[65px] bg-[#092962] rounded-full">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-[18px] sm:size-[20px] md:size-[22px] lg:size-[24px] text-white"
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
