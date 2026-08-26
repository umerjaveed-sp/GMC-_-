import React, { useState } from "react";
import logo from "../../assets/filters/logo2.png";
import FilterHero from "./FilterHero";

const FilterScholarships = () => {
  // Search states for each section
  const [searchCountry, setSearchCountry] = useState("");
  const [searchDegree, setSearchDegree] = useState("");
  const [searchDiscipline, setSearchDiscipline] = useState("");
  const [searchScholarshipType, setSearchScholarshipType] = useState("");
  const [searchDeadline, setSearchDeadline] = useState("");

  const [openCountries, setOpenCountries] = useState(true);
  const [openDegrees, setOpenDegrees] = useState(true);
  const [openDispline, setOpenDispline] = useState(true);
  const [openScholarshipType, setOpenScholarshipType] = useState(true);
  const [openScholarshipDeadline, setOpenScholarshipDeadline] = useState(true);

  const [selectOption, setselectOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Option");

  // Currency dropdown states
  const [selectCurrency, setSelectCurrency] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("Select Currency");

  // State for selected countries
  const [selectedCountries, setSelectedCountries] = useState([]);

  const coutriesOpen = () => {
    setOpenCountries(!openCountries);
  };
  const degreesOpen = () => {
    setOpenDegrees(!openDegrees);
  };
  const selectOptionDropdown = () => {
    setselectOption(!selectOption);
  };
  const DisplineOpen = () => {
    setOpenDispline(!openDispline);
  };
  const scholarshipTypeOpen = () => {
    setOpenScholarshipType(!openScholarshipType);
  };
  const scholarshipDeadlineOpen = () => {
    setOpenScholarshipDeadline(!openScholarshipDeadline);
  };

  // Currency dropdown toggle
  const selectCurrencyDropdown = () => {
    setSelectCurrency(!selectCurrency);
  };

  // Handle currency selection
  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setSelectCurrency(false);
  };

  // Handle function for country selection
  const handleCountryChange = (country) => {
    setSelectedCountries((prev) =>
      prev.includes(country)
        ? prev.filter((c) => c !== country)
        : [...prev, country],
    );
  };

  // Handle sort option selection
  const handleSortSelect = (option) => {
    setSelectedOption(option);
    setselectOption(false);
  };

  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "South Korea",
    "Singapore",
    "New Zealand",
  ];

  const degreeLevels = [
    "Undergraduate",
    "Postgraduate",
    "Postgraduate by Research",
    "PhD",
    "Diploma",
    "Certificate",
  ];

  const disciplines = [
    "Arts & Humanities",
    "Sciences",
    "Computer Science",
    "Engineering",
    "Mathematics",
    "Business & Management",
    "Economics & Finance",
    "Law",
    "Medicine & Health",
    "Education",
    "Social Sciences",
    "Design & Architecture",
    "Environmental Science",
  ];

  const scholarshipTypes = [
    "Academic Merit",
    "Athletic",
    "Need-Based",
    "International Student",
    "Subject-Specific",
    "Full Tuition",
    "Partial Tuition",
    "Research Grant",
    "Fellowship",
    "Bursary",
  ];

  const scholarshipDeadline = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currencies = [
    "USD - US Dollar",
    "EUR - Euro",
    "GBP - British Pound",
    "CAD - Canadian Dollar",
    "AUD - Australian Dollar",
    "JPY - Japanese Yen",
    "PLN - Polish Zloty",
    "INR - Indian Rupee",
    "CNY - Chinese Yuan",
    "SGD - Singapore Dollar",
  ];

  const cardLength = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
  ];

  return (
    <>
      <FilterHero />
      <div>
        <div className="w-auto h-auto px-4 sm:px-6 md:px-8 lg:px-24 my-6 md:my-10 flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* left-Side - Filter Sidebar */}
          <div className="w-full lg:w-[286px] h-auto mb-6 lg:mb-10 lg:sticky lg:top-[90px] lg:self-start">
            <div className="w-full lg:w-[286px] h-auto bg-white border border-gray-200 rounded-lg overflow-y-auto">
              {/* Header */}
              <div className="w-auto h-[72px] md:h-[92px] flex items-center justify-around bg-[#98D94A] px-4">
                <div className="text-[20px] md:text-[24px] font-bold text-white">
                  Filters
                </div>
                <div>
                  <button className="w-full text-[14px] md:text-[16px] text-[#092962] font-semibold">
                    Discover All
                  </button>
                </div>
              </div>

              {/* Countries Section */}
              <div>
                <div className="pt-[8px] px-2 pb-[24px] shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-[14px] md:text-[16px] text-[#605D64]">
                      Countries
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`cursor-pointer size-4 mt-1 font-semibold transition-transform duration-200 ${
                          !openCountries ? "rotate-180" : ""
                        }`}
                        onClick={coutriesOpen}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>

                  {openCountries && (
                    <div className="overflow-hidden transition-all duration-1000 ease-in-out">
                      <div className="relative mb-3">
                        <input
                          type="text"
                          placeholder="Search Country"
                          value={searchCountry}
                          onChange={(e) => setSearchCountry(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 bg-[#FAFAFA] rounded-lg text-sm focus:outline-none focus:border-[#74BF1A]"
                        />
                        <svg
                          className="absolute right-3 top-2.5 w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>

                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {countries
                          .filter((country) =>
                            country
                              .toLowerCase()
                              .includes(searchCountry.toLowerCase()),
                          )
                          .map((country, index) => (
                            <label
                              key={index}
                              className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[rgba(116,191,26,1)] cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                checked={selectedCountries.includes(country)}
                                onChange={() => handleCountryChange(country)}
                                className="w-4 h-4 text-[rgba(116,191,26,1)] border-gray-300 rounded hover:border-[#74BF1A]"
                              />
                              <span>{country}</span>
                            </label>
                          ))}
                      </div>

                      <div className="flex items-center justify-center mt-5">
                        <div className="w-[124px] h-[38px] rounded-[4px] bg-[#092962] text-white flex items-center justify-center text-[14px] font-semibold cursor-pointer hover:bg-[#071f4a] transition-colors">
                          Discover
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="shadow-lg px-2 pb-[24px]">
                  {/* Degree Level Section */}
                  <div className="mt-[24px]">
                    <div className="flex items-center justify-between">
                      <div className="text-[14px] md:text-[16px] text-[#605D64]">
                        Degree Level
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={`cursor-pointer size-4 mt-1 font-semibold transition-transform duration-200 ${
                            !openDegrees ? "rotate-180" : ""
                          }`}
                          onClick={degreesOpen}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {openDegrees && (
                    <div className="pb-[8px] pt-[8px]">
                      <div className="relative mb-3">
                        <input
                          type="text"
                          placeholder="Search Degree"
                          value={searchDegree}
                          onChange={(e) => setSearchDegree(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 bg-[#FAFAFA] rounded-lg text-sm focus:outline-none focus:border-[#74BF1A]"
                        />
                        <svg
                          className="absolute right-3 top-2.5 w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {degreeLevels
                          .filter((degree) =>
                            degree
                              .toLowerCase()
                              .includes(searchDegree.toLowerCase()),
                          )
                          .map((degree, index) => (
                            <label
                              key={index}
                              className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[rgba(116,191,26,1)] cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                className="w-4 h-4 text-[rgba(116,191,26,1)] border-gray-300 rounded"
                              />
                              <span>{degree}</span>
                            </label>
                          ))}
                      </div>

                      <div className="flex items-center justify-center mt-5">
                        <div className="w-[124px] h-[38px] rounded-[4px] bg-[#092962] text-white flex items-center justify-center text-[14px] font-semibold cursor-pointer hover:bg-[#071f4a] transition-colors">
                          Discover
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Disciplines */}
                <div className="shadow-lg px-2 pb-[24px]">
                  <div className="mt-[24px]">
                    <div className="flex items-center justify-between">
                      <div className="text-[14px] md:text-[16px] text-[#605D64]">
                        Disciplines
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={`cursor-pointer size-4 mt-1 font-semibold transition-transform duration-200 ${
                            !openDispline ? "rotate-180" : ""
                          }`}
                          onClick={DisplineOpen}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {openDispline && (
                    <div className="pb-[8px] pt-[8px]">
                      <div className="relative mb-3">
                        <input
                          type="text"
                          placeholder="Search Discipline"
                          value={searchDiscipline}
                          onChange={(e) => setSearchDiscipline(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 bg-[#FAFAFA] rounded-lg text-sm focus:outline-none focus:border-[#74BF1A]"
                        />
                        <svg
                          className="absolute right-3 top-2.5 w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {disciplines
                          .filter((discipline) =>
                            discipline
                              .toLowerCase()
                              .includes(searchDiscipline.toLowerCase()),
                          )
                          .map((discipline, index) => (
                            <label
                              key={index}
                              className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[rgba(116,191,26,1)] cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                className="w-4 h-4 text-[rgba(116,191,26,1)] border-gray-300 rounded hover:border-[#74BF1A]"
                              />
                              <span>{discipline}</span>
                            </label>
                          ))}
                      </div>

                      <div className="flex items-center justify-center mt-5">
                        <div className="w-[124px] h-[38px] rounded-[4px] bg-[#092962] text-white flex items-center justify-center text-[14px] font-semibold cursor-pointer hover:bg-[#071f4a] transition-colors">
                          Discover
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Scholarship Type */}
                <div className="shadow-lg px-2 pb-[24px]">
                  <div className="mt-[24px]">
                    <div className="flex items-center justify-between">
                      <div className="text-[14px] md:text-[16px] text-[#605D64]">
                        Scholarship Type
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={`cursor-pointer size-4 mt-1 font-semibold transition-transform duration-200 ${
                            !openScholarshipType ? "rotate-180" : ""
                          }`}
                          onClick={scholarshipTypeOpen}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {openScholarshipType && (
                    <div className="pb-[8px] pt-[8px]">
                      <div className="relative mb-3">
                        <input
                          type="text"
                          placeholder="Search Scholarship Type"
                          value={searchScholarshipType}
                          onChange={(e) =>
                            setSearchScholarshipType(e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 bg-[#FAFAFA] rounded-lg text-sm focus:outline-none focus:border-[#74BF1A]"
                        />
                        <svg
                          className="absolute right-3 top-2.5 w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {scholarshipTypes
                          .filter((type) =>
                            type
                              .toLowerCase()
                              .includes(searchScholarshipType.toLowerCase()),
                          )
                          .map((type, index) => (
                            <label
                              key={index}
                              className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[rgba(116,191,26,1)] cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                className="w-4 h-4 text-[rgba(116,191,26,1)] border-gray-300 rounded"
                              />
                              <span>{type}</span>
                            </label>
                          ))}
                      </div>

                      <div className="flex items-center justify-center mt-5">
                        <div className="w-[124px] h-[38px] rounded-[4px] bg-[#092962] text-white flex items-center justify-center text-[14px] font-semibold cursor-pointer hover:bg-[#071f4a] transition-colors">
                          Discover
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Scholarship Deadline */}
                <div className="shadow-lg px-2 pb-[24px]">
                  <div className="mt-[24px]">
                    <div className="flex items-center justify-between">
                      <div className="text-[14px] md:text-[16px] text-[#605D64]">
                        Scholarship Deadline
                      </div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={`cursor-pointer size-4 mt-1 font-semibold transition-transform duration-200 ${
                            !openScholarshipDeadline ? "rotate-180" : ""
                          }`}
                          onClick={scholarshipDeadlineOpen}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {openScholarshipDeadline && (
                    <div className="pb-[8px] pt-[8px]">
                      <div className="relative mb-3">
                        <input
                          type="text"
                          placeholder="Search Deadline"
                          value={searchDeadline}
                          onChange={(e) => setSearchDeadline(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 bg-[#FAFAFA] rounded-lg text-sm focus:outline-none focus:border-[#74BF1A]"
                        />
                        <svg
                          className="absolute right-3 top-2.5 w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                      <div className="space-y-2 max-h-48 overflow-y-auto">
                        {scholarshipDeadline
                          .filter((month) =>
                            month
                              .toLowerCase()
                              .includes(searchDeadline.toLowerCase()),
                          )
                          .map((month, index) => (
                            <label
                              key={index}
                              className="flex items-center space-x-2 text-sm text-gray-700 hover:text-[rgba(116,191,26,1)] cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                className="w-4 h-4 text-[rgba(116,191,26,1)] border-gray-300 rounded hover:border-[#74BF1A]"
                              />
                              <span>{month}</span>
                            </label>
                          ))}
                      </div>

                      <div className="flex items-center justify-center mt-5">
                        <div className="w-[124px] h-[38px] rounded-[4px] bg-[#092962] text-white flex items-center justify-center text-[14px] font-semibold cursor-pointer hover:bg-[#071f4a] transition-colors">
                          Discover
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right-Side */}
          <div className="w-full flex-1 h-auto">
            {/* Top - Part */}
            <div className="h-auto w-auto py-[12px] md:py-[16px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 border border-l-0 border-r-0 border-t-0 border-b-[#79767D]">
              <div className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-[#322F35]">
                785673 Results Found
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-5 items-center">
                <div>
                  <label className="flex items-center space-x-2 text-xs sm:text-sm text-[#322F35] cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border-gray-300 rounded"
                    />
                    <span>Recommended Courses</span>
                  </label>
                </div>
                <div>
                  <div className="w-[100px] sm:w-[120px] h-[38px] sm:h-[44px] rounded-[8px] bg-[#74BF1A] text-white flex items-center justify-center text-[12px] sm:text-[14px] font-semibold cursor-pointer hover:bg-[#67a51b] transition-colors">
                    Apply Now
                  </div>
                </div>
              </div>
            </div>

            {/* Sort By */}
            <div className="w-auto h-auto mt-4 md:mt-5 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <div className="text-[#322F35] font-medium text-[14px] sm:text-[16px]">
                  Sort by:{" "}
                </div>
                <div className="relative">
                  <div
                    className="w-[140px] sm:w-[164px] h-[38px] sm:h-[42px] bg-white flex items-center justify-between text-[14px] sm:text-[16px] font-medium text-[#605D64] px-3 sm:px-4 rounded-[4px] border border-gray-200 cursor-pointer hover:border-[#74BF1A] z-50"
                    onClick={selectOptionDropdown}
                  >
                    <div className="truncate">{selectedOption}</div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`cursor-pointer size-4 mt-1 font-semibold transition-transform duration-200 ${
                          selectOption ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>

                  {selectOption && (
                    <div className="absolute left-0 mt-1 w-[140px] sm:w-[164px] bg-white shadow-xl rounded-lg py-2 z-50 border border-gray-100 max-h-[300px] overflow-y-auto">
                      {degreeLevels.map((item) => (
                        <div
                          key={item}
                          onClick={() => handleSortSelect(item)}
                          className="px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm text-gray-800 hover:text-[rgba(116,191,26,1)] hover:bg-gray-50 cursor-pointer"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Currency Dropdown */}
              <div className="relative w-full sm:w-auto">
                <div
                  className={`w-full sm:w-[280px] md:w-[319px] h-[42px] sm:h-[49px] bg-white rounded-[4px] flex pl-2 text-[#605D64] border cursor-pointer hover:border-[#74BF1A] ${
                    selectCurrency ? "border-[#74BF1A]" : "border-gray-200"
                  }`}
                  onClick={selectCurrencyDropdown}
                >
                  <div className="flex items-center justify-between w-full pr-2">
                    <div className="flex gap-2 items-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4 sm:size-5 text-[#74BF1A]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </div>
                      <div className="text-[13px] sm:text-[16px] font-medium text-[#605D64] truncate max-w-[180px] sm:max-w-[220px]">
                        {selectedCurrency}
                      </div>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className={`cursor-pointer size-4 mt-1 transition-transform duration-200 ${
                          selectCurrency ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Currency Dropdown Menu */}
                {selectCurrency && (
                  <div className="absolute top-full left-0 mt-1 w-full sm:w-[280px] md:w-[319px] bg-white shadow-xl rounded-lg py-2 z-50 border border-gray-100 max-h-[300px] overflow-y-auto">
                    {currencies.map((currency) => (
                      <div
                        key={currency}
                        onClick={() => handleCurrencySelect(currency)}
                        className="px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm text-gray-800 hover:text-[rgba(116,191,26,1)] hover:bg-gray-50 cursor-pointer"
                      >
                        {currency}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Cards */}
            <div className="w-auto h-auto mt-6 md:mt-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-[32px] justify-items-center">
                {cardLength.map((item) => (
                  <div key={item.id} className="w-full max-w-[286px]">
                    <div className="w-full h-auto rounded-[8px] border border-t-[4px] border-[#74BF1A] bg-white shadow-lg border-l-0 border-r-0 border-b-0 hover:shadow-xl transition-shadow duration-300">
                      <div>
                        <div className="font-bold text-[14px] sm:text-[16px] text-[#48464C] mx-3 sm:mx-5 py-4 sm:py-5 text-center sm:text-left">
                          $1000 International Student <br /> Scholarship
                        </div>

                        <div className="flex flex-col mx-3 sm:mx-5">
                          <div className="flex flex-col gap-2 text-[#062254] text-[10px] sm:text-[12px]">
                            <div className="flex gap-1 items-center">
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-4 sm:size-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                                  />
                                </svg>
                              </div>
                              <div className="truncate">United Kingdom</div>
                            </div>
                            <div className="flex gap-1 items-center">
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-4 sm:size-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                                  />
                                </svg>
                              </div>
                              <div className="truncate">Arts & Humanities</div>
                            </div>
                            <div className="flex gap-1 items-center">
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-4 sm:size-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                                  />
                                </svg>
                              </div>
                              <div>Master</div>
                            </div>
                            <div className="flex gap-1 items-center">
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-4 sm:size-6"
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
                              </div>
                              <div>On Campus</div>
                            </div>
                            <div className="flex gap-1 items-center">
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="size-4 sm:size-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                              </div>
                              <div className="truncate">18,000 PLN/Year</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-center gap-2 mx-3 sm:mx-5 pb-4">
                        <div className="w-full sm:w-[124px] h-[38px] rounded-[4px] bg-[#092962] text-white flex items-center justify-center text-[12px] sm:text-[14px] font-semibold cursor-pointer hover:bg-[#0b3a7a] transition-colors">
                          Discover
                        </div>
                        <div className="w-full sm:w-[124px] h-[38px] rounded-[4px] bg-[#092962] text-white flex items-center justify-center text-[12px] sm:text-[14px] font-semibold cursor-pointer hover:bg-[#0b3a7a] transition-colors">
                          Apply
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterScholarships;
