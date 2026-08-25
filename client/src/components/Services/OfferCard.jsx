export default function OfferCards() {
  const features = [
    "Key features of this Package",
    "Key features of this Package",
    "Key features of this Package",
    "Key features of this Package",
  ];

  const offers = [1, 2, 3];

  return (
    <section className="w-full h-auto bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
      <div className="w-full max-w-[1440px] mx-auto py-6 sm:py-8 md:py-10">
        {/* Header Section */}
        <div className="flex items-center justify-center flex-col space-y-2 py-6 sm:py-8 md:py-10 text-center px-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#322F35] font-bold">
            Application & Admission Support
          </h1>
          <h1 className="text-[#322F35] text-base sm:text-lg md:text-[20px] max-w-2xl">
            Guidance to find & apply for scholarships that match your goals
          </h1>
        </div>

        {/* Offer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 justify-center">
          {offers.map((offer) => (
            <div
              key={offer}
              className="flex flex-col text-white w-full max-w-[394px] mx-auto sm:mx-0 h-auto min-h-[434px] rounded-[16px] bg-[#092962] pt-6 sm:pt-7 md:pt-8 px-4 sm:px-5 md:px-6 pb-6 sm:pb-7 md:pb-8 gap-2 sm:gap-3"
            >
              <h2 className="text-lg sm:text-xl md:text-[20px] font-bold">
                Offer Title
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              {features.map((feature, i) => (
                <div key={i}>
                  <div className="space-y-3 sm:space-y-4 md:space-y-5">
                    <div className="flex items-start gap-3 sm:gap-4 text-sm sm:text-base md:text-[16px]">
                      <span className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[24px] md:h-[24px] rounded-full bg-[#74BF1A] text-[#092962] text-xs sm:text-sm md:text-[16px] flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span className="text-gray-200">{feature}</span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="text-lg sm:text-xl md:text-[20px] text-[#86CC31] mt-2 sm:mt-3 md:mt-4 mb-6 sm:mb-8 md:mb-10 font-semibold">
                Limited Time Offer
              </div>

              <button className="w-full sm:w-[183px] px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg gap-2 transition-colors text-white text-xs sm:text-sm font-semibold bg-[#86CC31] hover:bg-[#74B82A] transform hover:scale-105 transition-all duration-300">
                Grab Your Offer <span className="ml-1 sm:ml-2"> →</span>
              </button>
            </div>
          ))}
        </div>

        {/* Banner Section */}
        <div className="w-full max-w-[1190px] h-auto min-h-[50px] sm:h-[60px] md:h-[69px] bg-[#98D94A] text-[#17366E] mt-8 sm:mt-12 md:mt-16 font-bold text-base sm:text-xl md:text-2xl lg:text-[25px] flex items-center justify-center px-4 sm:px-6 rounded-lg text-center py-3 sm:py-4">
          <div>Hurry! These offers are available only for a limited time.</div>
        </div>
      </div>
    </section>
  );
}
