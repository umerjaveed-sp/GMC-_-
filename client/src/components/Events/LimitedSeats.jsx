import React from "react";
import { useNavigate } from "react-router-dom";

const LimitedSeats = () => {
  const navigate = useNavigate();
  return (
    <section className="w-auto h-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-0">
      <div className="flex items-center justify-center my-4 sm:my-6 md:my-8 lg:my-12 xl:my-20">
        <div className="w-full max-w-[320px] sm:max-w-[480px] md:max-w-[640px] lg:max-w-[820px] xl:max-w-[1020px] 2xl:max-w-[1239px] h-auto min-h-[160px] sm:min-h-[180px] md:min-h-[220px] lg:min-h-[280px] xl:min-h-[320px] 2xl:h-[350px] rounded-[12px] sm:rounded-[14px] md:rounded-[16px] border bg-[#86CC31] flex items-center justify-center p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8">
          <div className="w-full max-w-[280px] sm:max-w-[420px] md:max-w-[540px] lg:max-w-[620px] xl:max-w-[680px] 2xl:max-w-[728px] h-auto min-h-[80px] sm:min-h-[100px] md:min-h-[140px] lg:min-h-[160px] xl:min-h-[180px] 2xl:h-[208px] gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-[24px] text-[#092962]">
            <div className="flex items-center justify-center flex-col space-y-1.5 sm:space-y-2 md:space-y-2.5 lg:space-y-3 xl:space-y-5">
              <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-[28px] 2xl:text-[30px] font-bold text-center px-2 leading-tight sm:leading-snug md:leading-normal">
                Limited seats available for the IELTS Crash
                <br className="hidden sm:block" /> Course Webinar - Register
                now!
              </h1>
              <p className="text-white text-[10px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base text-center px-2 sm:px-3 md:px-4 max-w-2xl line-clamp-2 sm:line-clamp-3 md:line-clamp-3 lg:line-clamp-none">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
                ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor
              </p>
              <div
                className="flex flex-row items-center justify-center w-full max-w-[120px] sm:max-w-[140px] md:max-w-[160px] lg:max-w-[200px] xl:max-w-[280px] 2xl:w-[333px] h-[28px] sm:h-[30px] md:h-[34px] lg:h-[38px] xl:h-[40px] 2xl:h-[44px] px-1.5 sm:px-2 md:px-3 lg:px-4 xl:px-1 py-1 gap-1 sm:gap-1.5 md:gap-2 rounded-lg bg-[#092962] font-medium text-white mb-1 sm:mb-1.5 md:mb-2 hover:bg-[#0c2044] transition-all duration-200 cursor-pointer"
                onClick={() => navigate("/register")}
              >
                <button className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base">
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
