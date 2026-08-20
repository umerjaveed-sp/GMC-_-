import React from "react";
import hero from "../../assets/destinations/DestinationHero.jpg";

const Hero = () => {
  return (
    <>
      <div
        className=" w-full mt-[74px] h-[774px]  bg-cover bg-center bg-no-repeat mb-10 "
        style={{ backgroundImage: `url(${hero})` }}
      ></div>
    </>
  );
};

export default Hero;
