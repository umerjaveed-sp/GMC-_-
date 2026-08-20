import React from "react";
import blogHero from "../../assets/blog/bloghero.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="relative">
      <div
        className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[774px] mt-[50px] sm:mt-[60px] md:mt-[65px] lg:mt-[70px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${blogHero})` }}
      >
        {/* Overlay for better text readability on mobile/tablet */}
        <div className="absolute inset-0 bg-black/40 sm:bg-black/30 md:bg-black/20 lg:bg-transparent"></div>

        {/* Content Container */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:top-[45%] md:top-[40%] lg:top-[301px] lg:left-[655px] lg:transform-none w-[90%] sm:w-[85%] md:w-[75%] lg:w-[696px] h-auto min-h-[150px] sm:min-h-[180px] md:min-h-[200px] lg:h-[234px] flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[32px] z-10 items-center lg:items-start text-center lg:text-left">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Latest Articles & Insights
          </h1>

          {/* Description */}
          <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-[20px] font-semibold leading-relaxed max-w-full sm:max-w-md md:max-w-lg lg:max-w-lg">
            Stay Updated with Guides, Tips and News about Scholarships,
            Admissions & Test Preps
          </p>

          {/* CTA Button */}
          <button
            className="flex items-center justify-center w-fit h-auto px-4 sm:px-5 md:px-6 lg:px-6 py-2 sm:py-3 md:py-[14px] lg:py-[14px] gap-2 rounded-lg bg-[#74BF1A] text-white font-medium hover:bg-[#5FA016] transition-all duration-200 text-sm sm:text-base lg:text-base"
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
