import React from "react";
import finland from "../../assets/destinations/finland.jpg";
import france from "../../assets/destinations/france.jpg";
import germany from "../../assets/destinations/germany.jpg";
import italy from "../../assets/destinations/italy.jpg";
import sweden from "../../assets/destinations/sweden.jpg";
import turkey from "../../assets/destinations/turkey.jpg";
import uae from "../../assets/destinations/uae.jpg";
import uk from "../../assets/destinations/uk.png";
import usa from "../../assets/destinations/usa.jpg";

const countries = [
  { name: "USA", image: usa },
  { name: "UK", image: uk },
  { name: "Germany", image: germany },
  { name: "France", image: france },
  { name: "Italy", image: italy },
  { name: "Sweden", image: sweden },
  { name: "Finland", image: finland },
  { name: "Turkey", image: turkey },
  { name: "UAE", image: uae },
];

const CountryCards = () => {
  return (
    <section className="w-full h-auto">
      <div className="px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="mb-6 sm:mb-8 md:mb-10">
          <div className="flex items-center justify-center flex-col space-y-1 sm:space-y-2 md:space-y-3">
            <h1 className="text-[#74BF1A] font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
              Study Abroad
            </h1>
            <h2 className="text-gray-800 text-center font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl leading-tight">
              Explore Comprehensive Information on Top
            </h2>
            <h2 className="text-gray-800 text-center font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl leading-tight">
              Study Destinations Around the Globe
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 my-6 sm:my-8 md:my-10">
          {countries.map((country) => (
            <div
              key={country.name}
              className="w-full max-w-[350px] mx-auto lg:max-w-full h-[350px] sm:h-[390px] md:h-[450px] lg:h-[553px] rounded-[16px] overflow-hidden flex-shrink-0"
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat flex items-end justify-center transition-transform duration-300 hover:scale-110"
                style={{ backgroundImage: `url(${country.image})` }}
              >
                <div className="font-bold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-white mb-6 sm:mb-8 md:mb-10 lg:mb-12">
                  {country.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryCards;
