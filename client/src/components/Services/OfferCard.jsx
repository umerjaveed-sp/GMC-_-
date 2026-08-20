export default function OfferCards() {
  const features = [
    "Key features of this Package",
    "Key features of this Package",
    "Key features of this Package",
    "Key features of this Package",
  ];

  const offers = [1, 2, 3];

  return (
    <section className="w-auto h-auto bg-white   ">
      <div className="mx-20 py-10 ">
        <div className="flex items-center justify-center flex-col space-y-2 py-10">
          <h1 className="text-[40px] text-[#322F35] font-bold">
            Application & Admission Support
          </h1>
          <h1 className="text-[#322F35] text-[20px]">
            Guidance to find & apply for scholarships that match your goals
          </h1>
        </div>

        <div className="flex  justify-center gap-5">
          {offers.map((offer) => (
            <div
              key={offer}
              className="flex flex-col text-white"
              style={{
                width: "394px",
                height: "434px",
                borderRadius: "16px",
                backgroundColor: "#092962",
                paddingTop: "32px",
                paddingRight: "24px",
                paddingBottom: "32px",
                paddingLeft: "24px",
                gap: "10px",
              }}
            >
              <h2 className="text-[20px] font-bold">Offer Title</h2>
              <p className="text-xs text-gray-300">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              {features.map((feature, i) => (
                <div>
                  <div className="space-y-5">
                    <div
                      key={i}
                      className="flex items-center gap-4 text-[16px]"
                    >
                      <span className="w-[24px] h-[24px] rounded-full bg-[#74BF1A] text-[#092962] text-[16px] flex items-center justify-center shrink-0">
                        ✓
                      </span>
                      {feature}
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-[20px] text-[#86CC31] mt-2 mb-10 ">
                Limited Time Offer
              </div>

              <button className="w-[183px] px-5 py-3.5 rounded-lg gap-2 transition-colors text-white text-sm font-semibold  bg-[#86CC31] ">
                Grab Your Offer <span className="ml-2"> →</span>
              </button>
            </div>
          ))}
        </div>

        <div className="w-[1190px] h-[69px] bg-[#98D94A] text-[#17366E]  mt-16 font-bold text-[25px] flex items-center justify-center ">
          <div>Hurry! These offers are available only for a limited time.</div>
        </div>
      </div>
    </section>
  );
}
