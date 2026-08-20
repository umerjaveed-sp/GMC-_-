import React from "react";
import hero from "../../assets/home/Hero.jpg";
import { useNavigate } from "react-router-dom";

const Home1 = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative w-full min-h-[500px] md:min-h-[600px] lg:h-[774px] bg-cover bg-center bg-no-repeat mt-[50px] md:mt-[75px] flex items-center"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* Dark overlay for better text readability on mobile */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30 lg:bg-black/20"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 md:py-12 lg:py-0">
        <div className="max-w-full sm:max-w-[500px] md:max-w-[550px] lg:max-w-[602px] mx-auto lg:mx-0 lg:ml-auto lg:mr-0">
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Unlock a world-class
            <br className="hidden sm:block" />
            education in UK with
            <br />
            <span className="text-[#74BF1A]">expert guidance</span>
          </h1>

          {/* Description */}
          <div className="text-sm sm:text-base text-white/90 leading-relaxed mt-3 sm:mt-4 md:mt-5 lg:mt-6">
            <p className="hidden sm:block">
              The UK is home to world-class universities, strong career
              prospects, and a welcoming community. At Global Minds, we'll guide
              you every step of the way to studying in the UK—from choosing the
              right course to building a standout application. You're in good
              hands.
            </p>
            {/* Shorter version for mobile */}
            <p className="sm:hidden">
              The UK is home to world-class universities, strong career
              prospects, and a welcoming community. At Global Minds, we'll guide
              you every step of the way to studying in the UK.
            </p>
          </div>

          {/* CTA Button */}
          <button
            className="flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-[14px] gap-2 rounded-lg bg-[#74BF1A] text-white font-medium hover:bg-[#5FA016] transition-all duration-200 mt-4 sm:mt-5 md:mt-6 text-sm sm:text-base"
            onClick={() => navigate("/bookingform")}
          >
            <span>Book free counselling</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home1;
