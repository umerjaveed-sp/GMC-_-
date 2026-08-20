import React from "react";
import { useNavigate } from "react-router-dom";

const LimitedSeats = () => {
  const navigate = useNavigate();
  return (
    <section className="w-auto h-auto px-3 sm:px-4 md:px-6 lg:px-0">
      <div className="flex items-center justify-center my-6 sm:my-8 md:my-12 lg:my-20">
        <div className="w-full max-w-[340px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[900px] xl:max-w-[1100px] 2xl:w-[1239px] h-auto min-h-[180px] sm:min-h-[220px] md:min-h-[280px] lg:h-[350px] rounded-[16px] border bg-[#86CC31] flex items-center justify-center p-4 sm:p-5 md:p-6 lg:p-0">
          <div className="w-full max-w-[300px] sm:max-w-[480px] md:max-w-[600px] lg:max-w-[650px] xl:max-w-[728px] h-auto min-h-[100px] sm:min-h-[140px] md:min-h-[180px] lg:h-[208px] gap-2 sm:gap-3 md:gap-4 lg:gap-[24px] text-[#092962]">
            <div className="flex items-center justify-center flex-col space-y-1.5 sm:space-y-2 md:space-y-3 lg:space-y-5">
              <h1 className="text-base sm:text-lg md:text-2xl lg:text-[30px] font-bold text-center px-2 leading-tight sm:leading-normal">
                Limited seats available for the IELTS Crash
                <br className="hidden sm:block" /> Course Webinar - Register
                now!
              </h1>
              <p className="text-white text-[11px] sm:text-xs md:text-sm lg:text-base text-center px-2 sm:px-3 md:px-4 max-w-2xl line-clamp-3 sm:line-clamp-3 md:line-clamp-none">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor
              </p>
              <div
                className="flex flex-row items-center justify-center w-full max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:w-[333px] h-[32px] sm:h-[36px] md:h-[40px] lg:h-[44px] px-2 sm:px-3 md:px-4 lg:px-1 py-1 gap-1 sm:gap-2 rounded-lg bg-[#092962] font-medium text-white mb-1 sm:mb-2 hover:bg-[#0c2044] transition-all duration-200 cursor-pointer"
                onClick={() => navigate("/register")}
              >
                <button className="text-[11px] sm:text-xs md:text-sm lg:text-base">
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitedSeats;
