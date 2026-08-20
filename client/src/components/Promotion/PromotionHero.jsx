import React from "react";
import hero from "../../assets/promotion/promotionhero.jpg";

const PromotionHero = () => {
  console.log("hero");
  return (
    <>
      <div
        className=" mt-[50px] w-full h-[774px]  bg-cover bg-center bg-no-repeat mb-10 flex items-center justify-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* Content Container */}
        <div className="w-[918px] h-[284px] rounded-[16px] border bg-[#041C47]/30 flex items-center justify-center ">
          <div className="w-[728px] h-[208px] gap-[24px] text-white ">
            <div className=" flex items-center justify-center flex-col space-y-5">
              <div className="text-[30px] text-center flex font-semibold">
                Study in UK with 30% Consultancy Fee Discount
              </div>
              <div className="text-[16px]  space-y-2 ">
                <li>Admission Support</li>
                <li>Vis Assistance</li>
                <li>Scholarship Guidance</li>
              </div>
              <div
                class="flex flex-row items-center justify-center w-[118px] h-[44px] px-1 py-1 gap-2 rounded-lg bg-[rgba(116,191,26,1)] font-medium text-[16px] text-white mb-2  hover:bg-[#5FA016] transition-all duration-20"
                onClick={() => navigate("/register")}
              >
                <button>Apply Now </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromotionHero;
