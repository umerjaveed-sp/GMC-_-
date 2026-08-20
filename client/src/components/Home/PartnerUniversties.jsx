import React, { useState, useContext } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper/modules";

import au from "../../assets/home/au.png";
import ca from "../../assets/home/ca.png";
import uk from "../../assets/home/uk.png";
import usa from "../../assets/home/usa.png";
import eu from "../../assets/home/eu.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import UserContext from "../../Context/UserContext";

const PartnerUniversties = () => {
  const { universitiesData } = useContext(UserContext);
  const SwiperNavButtons = () => {
    const swiper = useSwiper();

    return (
      <>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 z-10 left-0 text-[#74BF1A] hover:text-[#5FA016] transition-colors duration-200"
          onClick={() => swiper.slidePrev()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 sm:size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
        </button>

        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 text-[#74BF1A] hover:text-[#5FA016] transition-colors duration-200"
          onClick={() => swiper.slideNext()}
          aria-label="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 sm:size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </>
    );
  };

  const categories = [
    { id: "all", label: "All", icon: null },
    { id: "uk", label: "UK", icon: uk },
    { id: "canada", label: "Canada", icon: ca },
    { id: "usa", label: "USA", icon: usa },
    { id: "australia", label: "Australia", icon: au },
    { id: "europe", label: "Europe", icon: eu },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredUniversities =
    activeCategory === "all"
      ? universitiesData
      : universitiesData.filter(
          (uni) => uni.country.toLowerCase() === activeCategory.toLowerCase(),
        );

  return (
    <>
      <section
        className="mx-auto bg-white w-full h-auto px-4 sm:px-6 md:px-8 lg:px-10"
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          overflow: "visible",
        }}
      >
        <div className="space-y-6 sm:space-y-8">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 font-bold text-center">
              Our Partner Universities
            </h1>
          </div>
          <div className="flex items-center justify-center px-4">
            <p className="text-sm sm:text-base text-center text-gray-600">
              Lorem ipsum dolor sit, amet consectetur
            </p>
          </div>

          {/* Categories */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-14 cursor-pointer flex-wrap mb-6 sm:mb-8 md:mb-12 mx-2 sm:mx-4 lg:mx-10">
            {categories.map((category) => (
              <div
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  flex items-center gap-2 sm:gap-3 md:gap-4
                  font-semibold text-sm sm:text-base md:text-lg
                  text-gray-800
                  hover:border-b-2 hover:text-[#021A54]
                  border-[#021A54]
                  py-2 sm:py-3 md:py-[14px]
                  transition-all duration-200
                  ${activeCategory === category.id ? "border-b-2 text-[#021A54]" : "border-b-2 border-transparent"}
                  ${category.id === "all" ? "px-2 sm:px-3 md:px-4" : ""}
                `}
              >
                {category.icon && (
                  <img
                    src={category.icon}
                    alt={category.label}
                    className="w-[30px] sm:w-[35px] md:w-[40px] h-[20px] sm:h-[25px] md:h-[30px] object-cover"
                  />
                )}
                <h3>{category.label}</h3>
                {category.id === "all" && (
                  <span className="ml-1 text-xs sm:text-sm bg-[#021A54] text-white rounded-full px-2 py-0.5">
                    {universitiesData?.length || 0}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          className="mx-auto bg-white w-full"
          style={{
            paddingTop: "24px",
            paddingBottom: "24px",
          }}
        >
          <div className="w-full h-auto px-2 sm:px-4 md:px-6 lg:px-10 relative">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Grid]}
              spaceBetween={30}
              slidesPerView={2}
              navigation={false}
              pagination={false}
              scrollbar={false}
              grid={{
                rows: 2,
                fill: "row",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                  grid: {
                    rows: 2,
                    fill: "row",
                  },
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  grid: {
                    rows: 2,
                    fill: "row",
                  },
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                  grid: {
                    rows: 2,
                    fill: "row",
                  },
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                  grid: {
                    rows: 2,
                    fill: "row",
                  },
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 35,
                  grid: {
                    rows: 2,
                    fill: "row",
                  },
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                  grid: {
                    rows: 2,
                    fill: "row",
                  },
                },
                1536: {
                  slidesPerView: 4,
                  spaceBetween: 45,
                  grid: {
                    rows: 2,
                    fill: "row",
                  },
                },
              }}
              className="!pr-8 sm:!pr-12 md:!pr-16 !pl-8 sm:!pl-12 md:!pl-16 relative"
            >
              {filteredUniversities.length > 0 ? (
                filteredUniversities.map((university) => (
                  <SwiperSlide key={university.id} className="h-auto">
                    <div className="bg-[#FAFAFA] rounded-[8px] shadow-lg overflow-hidden p-3 mx-auto w-full max-w-[300px] sm:max-w-[320px] md:max-w-[340px] lg:max-w-[360px] h-[230px] sm:h-[340px] md:h-[350px] hover:shadow-xl transition-shadow duration-300">
                      {/* Location */}
                      <div className="flex gap-2 mb-3 sm:mb-4 items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-5 sm:size-6 text-[#74BF1A] flex-shrink-0"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                          />
                        </svg>
                        <span className="text-[#74BF1A] font-medium text-[12px] sm:text-base">
                          {university.location}
                        </span>
                      </div>

                      {/* University Logo */}
                      <div className="flex items-center justify-center">
                        <div className="flex items-center justify-center w-[55px] sm:w-[80px] md:w-[88px] h-[55px] sm:h-[100px] md:h-[111px]">
                          <img
                            src={university.image}
                            alt={university.name}
                            className="w-auto h-auto max-w-full max-h-full object-contain"
                          />
                        </div>
                      </div>

                      {/* University Info */}
                      <div className="p-1 sm:p-2 space-y-2 sm:space-y-3">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 line-clamp-2">
                          {university.name}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
                          {university.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide>
                  <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">
                      No universities found in {activeCategory}
                    </p>
                  </div>
                </SwiperSlide>
              )}
              <SwiperNavButtons />
            </Swiper>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center flex-col mt-6 sm:mt-8">
          <div className="flex items-center justify-center gap-[6px]">
            <div className="h-4 w-4 sm:h-5 sm:w-5 bg-[#74BF1A] rounded-full"></div>
            <div className="h-3 w-3 sm:h-4 sm:w-4 bg-gray-300 rounded-full"></div>
            <div className="h-3 w-3 sm:h-4 sm:w-4 bg-gray-300 rounded-full"></div>
            <div className="h-3 w-3 sm:h-4 sm:w-4 bg-gray-300 rounded-full"></div>
            <div className="h-3 w-3 sm:h-4 sm:w-4 bg-gray-300 rounded-full"></div>
          </div>
          <div className="text-[#74BF1A] mt-3 sm:mt-4 text-xl sm:text-2xl">
            <h2>More Universities</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerUniversties;
