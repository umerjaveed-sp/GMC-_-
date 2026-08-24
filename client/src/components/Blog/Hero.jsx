import React from "react";
import blogHero from "../../assets/blog/bloghero.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative">
      <div
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[774px] mt-[50px] sm:mt-[55px] md:mt-[60px] lg:mt-[65px] xl:mt-[70px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${blogHero})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 sm:bg-black/40 md:bg-black/30 lg:bg-black/20 xl:bg-transparent"></div>

        {/* Content Container */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:top-[45%] md:top-[40%] lg:top-[35%] xl:top-[301px] lg:left-1/2 xl:left-[655px] lg:transform lg:-translate-x-1/2 xl:transform-none w-[90%] sm:w-[85%] md:w-[80%] lg:w-[90%] xl:w-[696px] h-auto min-h-[120px] sm:min-h-[150px] md:min-h-[180px] lg:min-h-[200px] xl:h-[234px] flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-[32px] z-10 items-center lg:items-center xl:items-start text-center lg:text-center xl:text-left">
          {/* Main Heading */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
            Latest Articles & Insights
          </h1>

          {/* Description */}
          <p className="text-white/80 text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] font-semibold leading-relaxed max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg px-2 sm:px-0">
            Stay Updated with Guides, Tips and News about Scholarships,
            Admissions & Test Preps
          </p>

          {/* CTA Button */}
          <button
            className="flex items-center justify-center w-fit h-auto px-3 sm:px-4 md:px-5 lg:px-6 xl:px-6 py-1.5 sm:py-2 md:py-2.5 lg:py-3 xl:py-[14px] gap-2 rounded-lg bg-[#74BF1A] text-white font-medium hover:bg-[#5FA016] transition-all duration-200 text-xs sm:text-sm md:text-base lg:text-base xl:text-base"
            onClick={() => navigate("/blogPage")}
          >
            <span>Read Now →</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
