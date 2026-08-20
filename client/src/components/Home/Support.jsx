import React, { useContext } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import UserContext from "../../Context/UserContext";

// Custom Navigation Buttons Component (must be inside Swiper)
const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex items-center justify-center mt-8 sm:mt-10 gap-4 sm:gap-5 cursor-pointer">
      <div
        className="h-10 w-10 sm:h-12 sm:w-12 bg-[#021A54] flex items-center justify-center rounded-full text-[#74BF1A] transition-all duration-200"
        onClick={() => swiper.slidePrev()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 sm:size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
      </div>
      <div
        className="h-10 w-10 sm:h-12 sm:w-12 bg-[#021A54] flex items-center justify-center rounded-full text-[#74BF1A] transition-all duration-200"
        onClick={() => swiper.slideNext()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 sm:size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};

const Home4 = () => {
  const context = useContext(UserContext);

  // ✅ Destructure with the correct name (supportStudentsData, NOT supportStudentCard)
  const { supportStudentsData } = context || {};

  const supportStudentCard = supportStudentsData || [];

  return (
    <section className="w-full py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8 md:mb-10">
          How do We <span className="text-[#74BF1A]">Supports</span> Students?
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={15}
          slidesPerView={1}
          navigation={false}
          pagination={false}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="px-2 sm:px-4"
        >
          {supportStudentCard.map((card) => (
            <SwiperSlide key={card.id} className="h-auto">
              <div className="h-full px-1 sm:px-2">
                <div className="w-full max-w-[380px] mx-auto h-[493px] sm:h-[510px] md:h-[530px] lg:h-[493px] bg-white py-6 sm:py-8 px-4 sm:px-6 space-y-4 sm:space-y-5 rounded-[16px] shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden">
                  {/* Icon */}
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 sm:size-7 text-[#021A54]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={card.icon}
                      />
                    </svg>
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl sm:text-[28px] md:text-[32px] text-gray-800 font-bold leading-tight flex-shrink-0">
                    {card.title}
                  </h1>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-shrink-0 line-clamp-3">
                    {card.description}
                  </p>

                  {/* What We Offer */}
                  <h3 className="text-xl sm:text-2xl text-gray-800 font-bold mt-2 flex-shrink-0">
                    What We Offer
                  </h3>

                  {/* Features List */}
                  <div className="space-y-2 sm:space-y-2.5 flex-1 overflow-hidden">
                    {card.features &&
                      card.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex gap-3 items-start">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#021A54] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-3 sm:size-4 text-white"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 12.75 6 6 9-13.5"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                            {feature}
                          </p>
                        </div>
                      ))}
                  </div>

                  {/* CTA */}
                  <h2 className="text-[#021A54] text-base sm:text-lg font-bold cursor-pointer hover:text-[#74BF1A] transition-colors duration-200 mt-2 flex-shrink-0">
                    {card.cta}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Navigation buttons inside Swiper */}
          <SwiperNavButtons />
        </Swiper>
      </div>
    </section>
  );
};

export default Home4;
