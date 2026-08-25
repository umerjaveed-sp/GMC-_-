import React from "react";
import hero from "../../assets/destinations/DestinationHero.jpg";

const Hero = () => {
  return (
    <div
      className="w-full mt-[49px] sm:mt-[49px] md:mt-[69px] lg:mt-[73px] h-[300px] sm:h-[450px] md:h-[600px] lg:h-[774px] bg-cover bg-center bg-no-repeat mb-6 sm:mb-8 md:mb-10"
      style={{ backgroundImage: `url(${hero})` }}
    ></div>
  );
};

export default Hero;
