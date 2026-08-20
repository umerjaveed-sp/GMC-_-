import React from "react";
import vision1 from "../../assets/about/vision1.jpg";
import vision2 from "../../assets/about/vision2.jpg";
import vision3 from "../../assets/about/vision3.jpg";

const Vision = () => {
  return (
    <section className="w-auto h-auto pt-[20px] pb-[80px] bg-white">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 gap-[20px] sm:gap-[40px] md:gap-[60px] lg:gap-[82px] flex flex-col md:flex-row">
        {/* Left Column - Images */}
        <div className="w-full md:w-[50%] h-auto md:h-[565px] relative flex flex-wrap md:block justify-center items-center">
          <div className="w-[280px] sm:w-[320px] md:w-[380px] lg:w-[441px] h-auto md:h-[291px]">
            <img
              src={vision1}
              className="w-full h-full object-cover rounded-[8px]"
              alt="vision 1"
            />
          </div>
          <div className="w-[250px] sm:w-[290px] md:w-[340px] lg:w-[397px] h-auto md:h-[265px] mt-1">
            <img
              src={vision3}
              className="w-full h-full object-cover rounded-[8px]"
              alt="vision 3"
            />
          </div>
          {/* vision2 - only visible on lg screens */}
          <div className="hidden lg:block w-[279px] h-[419px] absolute top-10 left-[280px]">
            <img
              src={vision2}
              className="w-full h-full object-cover rounded-[8px]"
              alt="vision 2"
            />
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="w-full md:w-[50%] h-auto md:h-[565px] flex items-start md:items-end justify-start md:justify-end pl-0 md:pl-6 lg:pl-12">
          <div className="w-full md:w-[500px] lg:w-[604px] h-auto md:h-[398px]">
            <div>
              <div className="text-black h-[50px] sm:h-[60px] md:h-[70px] lg:h-[75px] font-semibold text-[45px] sm:text-[55px] md:text-[65px] lg:text-[80px] leading-[1.2] md:leading-[1.1]">
                Our
              </div>
              <div className="text-[#5FA016] h-[50px] sm:h-[60px] md:h-[70px] lg:h-[75px] font-semibold text-[45px] sm:text-[55px] md:text-[65px] lg:text-[80px] leading-[1.2] md:leading-[1.1]">
                Vision
              </div>
            </div>
            <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-12">
              <p className="text-sm sm:text-base md:text-base lg:text-base leading-relaxed">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                vitae provident quaerat! Hic nisi praesentium facere, tempore
                illum enim inventore pariatur laboriosam ea animi fugiat atque
                ex in sequi placeat. Consequatur nihil distinctio ut commodi
                molestias iste eius delectus sed cum inventore fugiat totam
                ullam possimus, magni soluta maxime facere! Ipsum earum non
                rerum aperiam quae autem laudantium beatae animi. Dicta,
                excepturi obcaecati.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
