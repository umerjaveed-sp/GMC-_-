import React from "react";
import girl from "../../assets/about/girl.png";

const Provide = () => {
  const cardPositions = [
    "lg:top-[220px] lg:left-0",
    "lg:right-0 lg:top-[448px]",
    "lg:right-0 lg:bottom-[448px]",
    "lg:right-0 lg:top-[220px]",
    "lg:left-0 lg:top-[448px]",
    "lg:left-0 lg:bottom-[448px]",
  ];

  const mobileCardPositions = [
    "sm:bottom-[200px] md:bottom-[130px] md:left-[50px]", // Left top
    "sm:bottom-[300px] md:bottom-[270px] md:right-0", // Left middle
    "sm:bottom-[400px] md:bottom-[400px] md:left-[50px]", // Left bottom
    "sm:bottom-[200px] md:bottom-[130px] md:right-[50px]", // Left top
    "sm:bottom-[300px] md:bottom-[270px] md:right-0px", // Left middle
    "sm:bottom-[400px] md:bottom-[400px] md:right-[50px]", // Right bottom
  ];

  const cards = [
    {
      icon: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75",
      label: "Compare",
    },
    {
      icon: "M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z",
      label: "Decide",
    },
    {
      icon: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
      label: "Explore",
    },
    {
      icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
      label: "Track",
    },
    {
      icon: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.431.992a7.723 7.723 0 0 1 0 .255c-.007.378.138.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
      label: "Prepare",
    },
    {
      icon: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
      label: "Apply",
    },
  ];

  return (
    <section className="py-12">
      <div className="mx-12 space-y-5">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-2">
          <h1 className="text-[#5FA016] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-semibold">
            What We Provide
          </h1>
          <h1 className="text-gray-800 text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold leading-tight">
            Benefits of Global Mind Consultant
          </h1>
        </div>

        {/* Mobile & Tablet (below lg) */}
        <div className="lg:hidden relative mt-10 flex items-center justify-center">
          <img
            src={girl}
            className="h-auto max-w-full object-cover relative z-0"
            alt=""
          />

          {/* Left Cards */}
          <div className="w-[120px] sm:w-[160px] md:w-[200px] h-screen absolute left-2 sm:left-4 flex flex-col justify-center gap-0 z-10">
            {cards.slice(0, 3).map((card, idx) => (
              <div
                key={card.label}
                className={`w-full h-[70px] sm:h-[90px] md:h-[100px] bg-white rounded-[8px] border-b-4 border-[#021A54] flex items-center justify-center gap-2 sm:gap-3 shadow-lg absolute ${mobileCardPositions[idx]}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="size-[18px] sm:size-[24px] text-[#021A54] flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={card.icon}
                  />
                </svg>
                <span className="text-gray-800 text-[12px] sm:text-[14px] md:text-[16px] font-bold whitespace-nowrap">
                  {card.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right Cards */}
          <div className="w-[120px] sm:w-[160px] md:w-[200px] h-screen absolute right-2 sm:right-4 flex flex-col justify-center gap-0 z-10">
            {cards.slice(3, 6).map((card, idx) => (
              <div
                key={card.label}
                className={`w-full h-[70px] sm:h-[90px] md:h-[100px] bg-white rounded-[8px] border-b-4 border-[#021A54] flex items-center justify-center gap-2 sm:gap-3 shadow-lg absolute ${mobileCardPositions[idx + 3]}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="size-[18px] sm:size-[24px] text-[#021A54] flex-shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={card.icon}
                  />
                </svg>
                <span className="text-gray-800 text-[12px] sm:text-[14px] md:text-[16px] font-bold whitespace-nowrap">
                  {card.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout (lg and above) */}
        <div className="hidden lg:flex relative items-center justify-center">
          <img src={girl} className="h-full object-cover" alt="" />

          {/* Left Cards */}
          <div className="w-[390px] h-[576px] absolute left-6 flex flex-col justify-center gap-5">
            {cards.slice(0, 3).map((card, idx) => (
              <div
                key={card.label}
                className={`w-[284px] h-[128px] bg-white rounded-[8px] border-b-4 border-[#021A54] flex items-center justify-center gap-5 absolute ${cardPositions[idx]}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="size-[53.33px] text-[#021A54]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={card.icon}
                  />
                </svg>
                <span className="text-gray-800 text-[30px] font-bold">
                  {card.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right Cards */}
          <div className="w-[390px] h-[576px] absolute right-10 flex flex-col justify-center gap-5">
            {cards.slice(3, 6).map((card, idx) => (
              <div
                key={card.label}
                className={`w-[284px] h-[128px] bg-white rounded-[8px] border-b-4 border-[#021A54] flex items-center justify-center gap-5 absolute ${cardPositions[idx + 3]}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="size-[53.33px] text-[#021A54]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={card.icon}
                  />
                </svg>
                <span className="text-gray-800 text-[30px] font-bold">
                  {card.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Provide;
