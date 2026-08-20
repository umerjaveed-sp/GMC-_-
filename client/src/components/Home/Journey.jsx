import React from "react";
import newYork from "../../assets/home/newyork.png";
import casatle from "../../assets/home/castle.png";

const Journey = () => {
  return (
    <section className="py-[30px] md:py-[40px] lg:py-[50px] gap-10 w-full overflow-hidden flex flex-col lg:flex-row h-auto px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Content Section - Top on mobile, Right on desktop */}
      <div className="w-full lg:w-[50%] order-1 lg:order-2 lg:pl-10 space-y-4 sm:space-y-5 md:space-y-6">
        <div className="h-auto space-y-3 sm:space-y-4">
          {/* Main Heading */}
          <h1 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-[#322F35] leading-tight">
            Your Journey to Study <br />
            Abroad Starts with Us
          </h1>

          {/* Description */}
          <div className="space-y-2 sm:space-y-3">
            <p className="text-sm sm:text-base text-[#79767D] leading-relaxed w-auto max-w-full lg:max-w-lg">
              We're dedicated to helping students achieve their dreams of
              studying abroad. With over 10 years of experience, we've guided
              thousands of students to top universities across the globe. Our
              expert team provides personalized support through every step of
              your journey—from university selection and application assistance
              to visa guidance and pre-departure orientation.
            </p>

            <p className="text-sm sm:text-base text-[#79767D] leading-relaxed w-auto max-w-full lg:max-w-lg">
              Whether you're seeking an undergraduate degree, a master's
              program, or a PhD opportunity, we're here to make your
              international education dreams a reality. Our partnerships with
              500+ universities worldwide ensure you get access to the best
              educational opportunities available.
            </p>
          </div>

          {/* CTA Button */}
          <button className="flex items-center justify-center w-full sm:w-auto px-6 py-[14px] gap-2 rounded-lg bg-[#74BF1A] text-white font-medium hover:bg-[#5FA016] transition-all duration-200 mt-2 sm:mt-3">
            <span>Book a Consultation Call</span>
          </button>
        </div>
      </div>

      {/* Image Section - Bottom on mobile, Left on desktop */}
      <div className="w-full lg:w-[50%] order-2 lg:order-1 flex justify-center lg:justify-start mt-4 sm:mt-5 md:mt-6 lg:mt-0">
        <div className="relative w-[320px] h-[380px] sm:w-[380px] sm:h-[430px] md:w-[420px] md:h-[470px] lg:w-[50%] lg:h-auto">
          <div className="absolute top-8 rounded-2xl shadow-2xl overflow-hidden z-10 w-[180px] h-[180px] sm:w-[220px] sm:h-[200px] md:w-[260px] md:h-[220px] lg:w-[280px] lg:h-[240px] xl:w-[320px] xl:h-[260px]">
            <img
              src={newYork}
              className="w-full h-full rounded-2xl object-cover hover:scale-105 transition-transform duration-300"
              alt="New York skyline"
            />
          </div>
          <div className="absolute top-0 left-[120px] sm:left-[150px] md:left-[180px] lg:left-[200px] xl:left-[250px] w-[180px] h-[260px] sm:w-[220px] sm:h-[300px] md:w-[250px] md:h-[350px] lg:w-[280px] lg:h-[400px] xl:w-[320px] xl:h-[479px] rounded-2xl overflow-hidden shadow-2xl z-20">
            <img
              src={casatle}
              className="w-full h-full object-cover"
              alt="Castle"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
