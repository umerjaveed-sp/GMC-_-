import React from "react";
import Ieltsyounggirl from "../../assets/ielts/ieltsyounggirl.jpg";

const ChooseUsForTestPrepration = () => {
  const benefits = [
    {
      id: 1,
      title: "Expert Instructors",
      description:
        "Learn from certified IELTS trainers with years of experience in helping students achieve their target scores.",
    },
    {
      id: 2,
      title: "Comprehensive Curriculum",
      description:
        "Complete coverage of all four modules: Listening, Reading, Writing, and Speaking with structured lesson plans.",
    },
    {
      id: 3,
      title: "Mock Tests & Practice",
      description:
        "Regular mock tests simulating real exam conditions with detailed performance analysis and feedback.",
    },
    {
      id: 4,
      title: "Proven Results",
      description:
        "Our students consistently achieve band scores of 7+ with many reaching 8.5 and above.",
    },
  ];

  return (
    <section className="w-auto h-auto py-[48px] gap-10  bg-white">
      <div className="mx-20 gap-[28px] space-y-5">
        <div className="mb-10">
          <div className="flex items-center justify-center flex-col space-y-2">
            <h1 className="text-[40px] font-bold">
              Why Choose Us for Test Preparation
            </h1>
            <h1 className="text-gray-800 text-[20px]">
              Boost your test scores with experts resources
            </h1>
          </div>
        </div>

        <div className="flex gap-[65px]">
          <div className="w-[598px] h-auto   ">
            <img
              src={Ieltsyounggirl}
              className="object-cover rounded-[16px]"
              alt=""
            />
          </div>
          <div className="  w-auto h-[740px] rounded-2xl p-6 gap-6 bg-white  mt-5">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {" "}
              Benifits
            </div>
            <div className="py-8">
              {benefits.map((benifit, i) => (
                <div key={benifit.id} className="flex items-stretch">
                  {" "}
                  {/* <-- Added items-stretch */}
                  {/* LEFT COLUMN: Numbers + Line */}
                  <div className="flex flex-col items-center mr-5">
                    <div className="w-[65px] h-[65px] shrink-0 rounded-full bg-[#74BF1A] text-white flex items-center justify-center text-2xl font-semibold">
                      {benifit.id}
                    </div>

                    {/* Line now fills the remaining height automatically because of parent 'items-stretch' */}
                    {i < benefits.length - 1 && (
                      <div className="w-[2px] flex-1 bg-gray-500" />
                    )}
                  </div>
                  {/* RIGHT COLUMN: Text */}
                  <div className="flex flex-col justify-center pb-[61px]">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {benifit.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                      {benifit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsForTestPrepration;
