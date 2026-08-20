import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("courses");

  const isCourses = activeTab === "courses";
  const isUniversities = activeTab === "universities";
  const isScholarships = activeTab === "scholarships";
  const isEnglishCourses = activeTab === "englishCourses";

  const handleSearch = () => {
    switch (activeTab) {
      case "courses":
        navigate("/services/course-filter");
        break;
      case "universities":
        navigate("/services/universties");
        break;
      case "scholarships":
        navigate("/services/scholarships");
        break;
      case "englishCourses":
        navigate("/services/IELTs");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(-10px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          .select-animate {
            animation: slideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
          
          .tab-item {
            transition: all 0.3s ease;
            white-space: nowrap;
          }
          
          .button-hover {
            transition: all 0.3s ease;
          }
          
          .button-hover:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(2, 26, 84, 0.25);
          }
          
          .button-hover:active {
            transform: scale(0.97);
          }
          
          .search-icon {
            transition: transform 0.3s ease;
          }
          
          .button-hover:hover .search-icon {
            transform: scale(1.1);
          }

          /* Custom scrollbar for tabs on mobile */
          .tabs-scroll {
            scrollbar-width: thin;
            scrollbar-color: #021A54 transparent;
          }
          
          .tabs-scroll::-webkit-scrollbar {
            height: 3px;
          }
          
          .tabs-scroll::-webkit-scrollbar-track {
            background: transparent;
          }
          
          .tabs-scroll::-webkit-scrollbar-thumb {
            background-color: #021A54;
            border-radius: 20px;
          }
        `}
      </style>

      <div className="mx-2 sm:mx-4 md:mx-8 lg:mx-16 xl:mx-24 my-4 sm:my-6 md:my-8 lg:my-10 bg-white shadow-lg rounded-xl px-3 sm:px-4 md:px-6 py-3 sm:py-4">
        {/* Tabs - Centered on sm and above, scrollable on extra small */}
        <div className="overflow-x-auto tabs-scroll">
          <div className="flex justify-center lg:justify-around sm:justify-center items-center font-semibold h-auto min-h-[60px] sm:h-16 w-auto shadow-md mb-4 list-none cursor-pointer  sm:gap-0">
            <li
              className={`tab-item hover:text-[#021A54] hover:border-[#021A54] px-3 sm:px-4 py-2 sm:py-3 sm:p-4 hover:border-b-2 flex-shrink-0 text-sm sm:text-base font-bold text-[10.5px] ${
                isCourses
                  ? "text-[#021A54] border-b-2 border-[#021A54]"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("courses")}
            >
              Courses
            </li>
            <li
              className={`tab-item hover:text-[#021A54] hover:border-[#021A54] px-3 sm:px-4 py-2 sm:py-3 sm:p-4 hover:border-b-2 flex-shrink-0 text-sm sm:text-base font-bold text-[10.5px] ${
                isUniversities
                  ? "text-[#021A54] border-b-2 border-[#021A54]"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("universities")}
            >
              Universities
            </li>
            <li
              className={`tab-item hover:text-[#021A54] hover:border-[#021A54] px-3 sm:px-4 py-2 sm:py-3 sm:p-4 hover:border-b-2 flex-shrink-0 text-sm sm:text-base font-bold text-[10.5px] ${
                isScholarships
                  ? "text-[#021A54] border-b-2 border-[#021A54]"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("scholarships")}
            >
              Scholarships
            </li>
            <li
              className={`tab-item hover:text-[#021A54] hover:border-[#021A54] px-3 sm:px-4 py-2 sm:py-3 sm:p-4 hover:border-b-2 flex-shrink-0 text-sm sm:text-base  font-bold text-[10.5px] ${
                isEnglishCourses
                  ? "text-[#021A54] border-b-2 border-[#021A54]"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("englishCourses")}
            >
              English Course
            </li>
          </div>
        </div>

        {/* Form Fields - Stack on mobile, row on larger screens */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 px-0 sm:px-2">
          {/* Input 1: Course Select */}
          <div className="flex-1 min-w-0">
            <select
              className="h-[45px] w-full border-2 outline-none rounded-md text-slate-500 px-3 text-sm sm:text-base bg-white"
              required
            >
              <option value="">Search by Course</option>
              <option value="computer-science">Computer Science</option>
              <option value="data-science">Data Science</option>
              <option value="artificial-intelligence">
                Artificial Intelligence
              </option>
              <option value="machine-learning">Machine Learning</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-development">Mobile App Development</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="cloud-computing">Cloud Computing</option>
              <option value="devops">DevOps</option>
            </select>
          </div>

          {/* Input 2: Degree Select */}
          <div className="flex-1 min-w-0">
            <select
              className="h-[45px] w-full border-2 outline-none rounded-md text-slate-500 px-3 text-sm sm:text-base bg-white"
              required
            >
              <option value="">Select Degree</option>
              <option value="bsc">Bachelor of Science (B.Sc)</option>
              <option value="ba">Bachelor of Arts (B.A)</option>
              <option value="bcom">Bachelor of Commerce (B.Com)</option>
              <option value="beng">Bachelor of Engineering (B.E)</option>
              <option value="mba">
                Master of Business Administration (MBA)
              </option>
              <option value="msc">Master of Science (M.Sc)</option>
              <option value="ma">Master of Arts (M.A)</option>
              <option value="phd">Doctor of Philosophy (Ph.D)</option>
              <option value="llb">Bachelor of Laws (LL.B)</option>
              <option value="mbbs">Bachelor of Medicine (MBBS)</option>
            </select>
          </div>

          {/* Input 3: Dynamic Select based on active tab */}
          <div className="flex-1 min-w-0">
            {/* Courses Tab - Show Course Type */}
            {isCourses && (
              <select
                className="select-animate h-[45px] w-full border-2 outline-none rounded-md text-slate-500 px-3 text-sm sm:text-base bg-white"
                required
              >
                <option value="">Course Type</option>
                <option value="undergraduate">Undergraduate</option>
                <option value="postgraduate">Postgraduate</option>
                <option value="diploma">Diploma</option>
                <option value="certificate">Certificate</option>
                <option value="vocational">Vocational</option>
                <option value="online">Online Course</option>
                <option value="part-time">Part Time</option>
                <option value="full-time">Full Time</option>
              </select>
            )}

            {/* Universities Tab - Show Area of Study */}
            {isUniversities && (
              <select
                className="select-animate h-[45px] w-full border-2 outline-none rounded-md text-slate-500 px-3 text-sm sm:text-base bg-white"
                required
              >
                <option value="">Choose your area of study</option>
                <option value="harvard">Harvard University</option>
                <option value="stanford">Stanford University</option>
                <option value="mit">MIT</option>
                <option value="berkeley">UC Berkeley</option>
                <option value="ucla">UCLA</option>
                <option value="yale">Yale University</option>
                <option value="princeton">Princeton University</option>
                <option value="columbia">Columbia University</option>
                <option value="nyu">NYU</option>
                <option value="penn">University of Pennsylvania</option>
              </select>
            )}

            {/* Scholarships Tab - Show Funding Type */}
            {isScholarships && (
              <select
                className="select-animate h-[45px] w-full border-2 outline-none rounded-md text-slate-500 px-3 text-sm sm:text-base bg-white"
                required
              >
                <option value="">Funding type</option>
                <option value="self-funded">Self-Funded</option>
                <option value="scholarship">Scholarship</option>
                <option value="grant">Grant</option>
                <option value="loan">Student Loan</option>
                <option value="sponsorship">Sponsorship</option>
                <option value="fellowship">Fellowship</option>
                <option value="financial-aid">Financial Aid</option>
                <option value="work-study">Work-Study Program</option>
                <option value="crowdfunding">Crowdfunding</option>
                <option value="venture-capital">Venture Capital</option>
              </select>
            )}

            {/* English Courses Tab - Show Test Type */}
            {isEnglishCourses && (
              <select
                className="select-animate h-[45px] w-full border-2 outline-none rounded-md text-slate-500 px-3 text-sm sm:text-base bg-white"
                required
              >
                <option value="">Select test type</option>
                <option value="ielts">IELTS</option>
                <option value="toefl">TOEFL</option>
                <option value="pte">PTE Academic</option>
                <option value="duolingo">Duolingo English Test</option>
                <option value="cambridge">Cambridge English (CAE/CPE)</option>
                <option value="gre">GRE</option>
                <option value="gmat">GMAT</option>
                <option value="sat">SAT</option>
                <option value="act">ACT</option>
                <option value="lsat">LSAT</option>
                <option value="mcat">MCAT</option>
              </select>
            )}
          </div>
        </div>

        {/* Search Button - Full width on mobile, centered on larger screens */}
        <div className="flex items-center justify-center mt-4 sm:mt-5 md:mt-6">
          <button
            onClick={handleSearch}
            className="button-hover flex items-center justify-center gap-3  sm:gap-5 h-12 w-full sm:w-52 bg-[#021A54] hover:bg-[#06256e] text-white font-semibold px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base"
          >
            <span>Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="search-icon size-4 sm:size-5 font-bold"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
