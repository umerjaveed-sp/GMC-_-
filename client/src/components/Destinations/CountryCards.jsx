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
    <section className="w-auto h-auto">
      <div className="mx-20">
        <div className="mb-10">
          <div className="flex items-center justify-center flex-col space-y-2">
            <h1 className="text-[24px] text-[#74BF1A] font-bold">
              Study Abroad
            </h1>
            <h1 className="text-gray-800 items-center font-semibold text-[40px]">
              Explore Comprehensive Information on Top
            </h1>
            <h1 className="text-gray-800 items-center font-semibold text-[40px]">
              Study Destinations Around the Globe
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 my-10">
          {countries.map((country) => (
            <div
              key={country.name}
              className="w-[350px] h-[553px] rounded-[16px] overflow-hidden flex-shrink-0"
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat flex items-end justify-center transition-transform duration-300 hover:scale-110"
                style={{ backgroundImage: `url(${country.image})` }}
              >
                <div className="font-bold text-[56px] text-white mb-12">
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
