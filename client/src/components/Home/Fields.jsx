import React from "react";
import law from "../../assets/home/fields/law.jpg";
import coding from "../../assets/home/fields/coding.jpg";
import engenire from "../../assets/home/fields/engenire.jpg";
import medicence from "../../assets/home/fields/medicence.jpg";
import bussiness from "../../assets/home/fields/bussiness.jpg";
import psychology from "../../assets/home/fields/psychology.jpg";

const Fields = () => {
  const universityCards = [
    {
      id: 1,
      title: "Law",
      description:
        "Study legal systems, justice, and human rights. Prepare for careers as lawyers, judges, or legal advisors.",
      image: law,
    },
    {
      id: 2,
      title: "Computer Science",
      description:
        "Learn programming, algorithms, and software development. Build the future of technology and innovation.",
      image: coding,
    },
    {
      id: 3,
      title: "Medicine",
      description:
        "Master human anatomy, diagnosis, and treatment. Become a doctor, surgeon, or healthcare professional.",
      image: medicence,
    },
    {
      id: 4,
      title: "Engineering",
      description:
        "Design, build, and innovate structures and systems. From civil to mechanical, shape the world around you.",
      image: engenire,
    },
    {
      id: 5,
      title: "Business Administration",
      description:
        "Develop leadership, management, and strategic thinking skills. Lead organizations and drive business growth.",
      image: bussiness,
    },
    {
      id: 6,
      title: "Psychology",
      description:
        "Understand human behavior, mental health, and cognitive processes. Help people live happier, healthier lives.",
      image: psychology,
    },
  ];
  return (
    <>
      <section
        className=" bg-white w-fauto h-auto "
        style={{
          maxWidth: "1440px", // Width: Fixed (1,440px)
          paddingTop: "20px", // Padding Top: 48px
          paddingBottom: "20px", // Padding Bottom: 48px
        }}
      >
        <div className="space-y-8">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl text-gray-800 font-bold">
              Discover Top Fields in Study
            </h1>
          </div>
          <div className="text-[15px] flex items-center justify-center">
            <p>Lorem ipsum dolor sit, amet consectetur</p>
          </div>
        </div>

        <div
          className=" bg-white px-16"
          style={{
            maxWidth: "1384px", // Width: Fixed (1,384px)
            paddingTop: "48px", // Gap: 48px (top)
            paddingBottom: "48px", // Gap: 48px (bottom)
          }}
        >
          <div className=" w-auto h-auto  relative ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {universityCards.map((university) => (
                <div
                  key={university.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden w-auto h-auto"
                >
                  {/* Image Section */}
                  <div className="flex items-center justify-center w-auto h-auto">
                    <img
                      src={university.image}
                      className="w-auto h-auto
                      
                       object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {university.title}
                    </h3>

                    <p className="text-gray-700 text-sm leading-relaxed">
                      {university.description}
                    </p>

                    {/* Learn More Button */}
                    <button className="mt-2 text-[#021A54] font-semibold hover:text-[#74BF1A] transition-colors duration-300">
                      Explore More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Fields;
