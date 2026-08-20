import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const nevigate = useNavigate();
  return (
    <section className="w-auto h-auto sm:mr-4 md:mr-8">
      <div className="lg:mt-32 mt-16 grid  relative grid-cols-1 px-10 lg:grid-cols-2 gap-[32px]">
        <div className="h-auto flex w-auto mr-10 flex-col items-center lg:items-start">
          <div className="w-[292px] h-[144px] -rotate-90 absolute left-0 top-0 lg:top-[75px] flex items-center justify-center mx-auto lg:mx-0">
            <div className="">
              <h1 className="text-gray-800 font-semibold text-[40px] sm:text-[30px] md:text-[35px] lg:text-[80px]">
                About
              </h1>
            </div>
          </div>

          <div className="w-[478px] h-[292px] absolute left-[180px] top-6 font-semibold text-[40px] sm:text-[25px] md:text-[30px] lg:text-[80px] flex flex-col items-start mx-auto">
            <div className="h-[30px] sm:h-[20px] md:h-[25px] lg:h-[60px] mb-2 text-[#5FA016]">
              Global
            </div>
            <div className="h-[30px] sm:h-[20px] md:h-[25px] lg:h-[60px] mb-4 text-[#021A54]">
              Mind
            </div>
            <div className="h-[30px] sm:h-[20px] md:h-[25px] lg:h-[60px] text-[#021A54] w-full">
              Consultant
            </div>
          </div>
        </div>

        <div className="w-full h-auto mt-52 lg:h-[464px] space-y-3 sm:space-y-2 md:space-y-3 lg:space-y-5 sm:mt-8 md:mt-8 lg:mt-0">
          <p className="text-sm sm:text-xs md:text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            ullam quo! Odio tempora nobis minus, impedit ut accusantium officia
            officiis sed nisi deserunt consectetur, perspiciatis quibusdam
            labore non ad esse. Explicabo fugiat quia voluptate maxime
            blanditiis illo vitae? Quos sed reprehenderit voluptatum quam fugit
            voluptas cupiditate quisquam deserunt illo porro autem quis quia
            vel, ab earum consectetur. Dolorem, officiis consequatur?
          </p>
          <p className="text-sm sm:text-xs md:text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            ullam quo! Odio tempora nobis minus, impedit ut accusantium officia
            officiis sed nisi deserunt consectetur, voluptatum quam fugit
            voluptas cupiditate quisquam deserunt illo porro autem quis quia
            vel, ab earum consectetur. Dolorem, officiis consequatur?
            perspiciatis quibusdam labore non ad esse. Explicabo fugiat quia
            voluptate maxime blanditiis illo vitae? Quos sed reprehenderit
            voluptatum quam fugit voluptas cupiditate quisquam deserunt illo
            porro autem quis quia vel, ab earum consectetur. Dolorem, officiis
            consequatur?
          </p>
          <button
            className="flex items-center justify-center gap-3 sm:gap-2 md:gap-3 lg:gap-5 h-10 sm:h-8 md:h-10 lg:h-12 w-40 sm:w-32 md:w-36 lg:w-52 bg-[#021A54] hover:bg-[#06256e] text-white font-semibold p-2 rounded-lg text-sm sm:text-xs md:text-sm lg:text-base"
            onClick={() => nevigate("/contactus")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
