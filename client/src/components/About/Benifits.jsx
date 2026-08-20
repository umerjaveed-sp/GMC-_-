import React from "react";
import person from "../../assets/about/person.png";

const Benifits = () => {
  const cards = [
    {
      id: 1,
      title: "Academic Excellence",
      p1: "Full tuition coverage",
      p2: "For outstanding academic records and leadership.",
    },
    {
      id: 2,
      title: "Sports Achievement",
      p1: "Up to $10,000 annually",
      p2: "For national-level student-athletes and representatives.",
    },
    {
      id: 3,
      title: "Research Innovation",
      p1: "Project-based funding",
      p2: "Supports STEM and humanities research projects.",
    },
    {
      id: 4,
      title: "Community Service",
      p1: "$5,000 stipend",
      p2: "Recognizes significant community contributions by students.",
    },
    {
      id: 5,
      title: "Global Exchange",
      p1: "Study abroad program",
      p2: "Enables cross-cultural learning and global exposure.",
    },
    {
      id: 6,
      title: "Future Leaders",
      p1: "Mentorship & networking",
      p2: "Develops leadership through workshops and internships.",
    },
  ];
  return (
    <section className="w-auto h-[1050px] bg-white py-[48px] ">
      <div className="mx-28 gap-[28px] space-y-5">
        <div>
          <div className="flex items-center justify-center flex-col  space-y-2">
            <h1 className="text-[#5FA016] text-[25px] font-semibold">
              What We Provide
            </h1>
            <h1 className="text-gray-800 text-[40px] font-bold">
              Benifits of Global Mind Consultant{" "}
            </h1>
          </div>
        </div>

        {/* Cards  */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
          {cards.map((item) => (
            <div className="bg-[#021A54] rounded-lg shadow-lg overflow-hidden w-[300px] h-[385px] mt-5">
              {/* Image Section */}
              <div className="rounded-[8px] flex items-center justify-center w-auto h-auto bg-[#b3f562] border border-[#021A54]">
                <img
                  src={person}
                  className="w-[300px] h-[207px] object-cover"
                />
              </div>

              {/* Content Section */}
              <div className=" space-y-2 ">
                <div
                  className=" flex items-center justify-center flex-col px-5 space-y-2 mt-5"
                  key={item.id}
                >
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>

                  <p className="text-[#74BF1A] text-sm leading-relaxed">
                    {item.p1}
                  </p>
                  <p className="text-white text-sm leading-relaxed">
                    {item.p2}
                  </p>
                </div>

                {/* Learn More Button */}
                <div className="flex items-cemter justify-center gap-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
                        fill="#1877F2"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                        fill="#0A66C2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benifits;
