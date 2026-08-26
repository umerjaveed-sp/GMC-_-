import React, { useState } from "react";
import logo from "../../assets/filters/logo2.png";

const FilterCards = () => {
  const [searchCountry, setSearchCountry] = useState("");
  const [searchDegree, setSearchDegree] = useState("");
  const [openCountries, setOpenCountries] = useState(true);
  const [openDegrees, setOpenDegrees] = useState(true);
  const [selectOption, setselectOption] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Option");

  // Currency dropdown states
  const [selectCurrency, setSelectCurrency] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("Select Currency");

  const coutriesOpen = () => {
    setOpenCountries(!openCountries);
  };
  const degreesOpen = () => {
    setOpenDegrees(!openDegrees);
  };
  const selectOptionDropdown = () => {
    setselectOption(!selectOption);
  };

  // Currency dropdown toggle
  const selectCurrencyDropdown = () => {
    setSelectCurrency(!selectCurrency);
  };

  // Handle sort option selection
  const handleSortSelect = (option) => {
    setSelectedOption(option);
    setselectOption(false);
  };

  // Handle currency selection
  const handleCurrencySelect = (currency) => {
    setSelectedCurrency(currency);
    setSelectCurrency(false);
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
                              className="w-4 h-4 text-[rgba(116,191,26,1)] rounded border-[#74BF1A]"
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
                    <div className="space-y-2">
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
                              className="w-4 h-4 text-[rgba(116,191,26,1)] border-gray-300 rounded focus:ring-[rgba(116,191,26,1)]"
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
                <label className="flex items-center space-x-2 text-xs sm:text-sm text-[#322F35] hover:text-#092962] cursor-pointer">
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

          {/* Sort By & Currency */}
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
                  <div className="absolute left-0 mt-1 w-[140px] sm:w-[164px] bg-white shadow-xl rounded-lg py-2 z-50 border border-gray-100">
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

          {/* Cards Grid */}
          <div className="w-auto h-auto mt-6 md:mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-[32px] justify-items-center">
              {cardLength.map((item) => (
                <div key={item.id} className="w-full max-w-[286px]">
                  <div className="w-full h-auto rounded-[8px] bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                    {/* Card Header */}
                    <div className="w-full flex h-[173px] rounded-t-[8px] border-t-0 border-l-0 border-r-0 bg-[#C0F283] border border-b-2 border-[#508C08] relative">
                      <div className="w-[52px] h-[20px] absolute right-2 top-2 flex items-center justify-around text-[#092962]">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                            />
                          </svg>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            />
                          </svg>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 px-3 sm:px-5 justify-center flex-col w-full">
                        <div className="mt-5">
                          <img
                            src={logo}
                            className="object-cover w-[180px] sm:w-[216px] h-[50px] sm:h-[63px]"
                            alt="University logo"
                          />
                        </div>
                        <div className="flex justify-center flex-col items-center text-center">
                          <div>
                            <h1 className="text-[12px] sm:text-[14px] font-bold text-[#092962]">
                              University of Oxford
                            </h1>
                          </div>
                          <div>
                            <p className="text-[10px] sm:text-[12px] text-[#092962]">
                              Wellington Square, Oxford OX1 2JD, UK
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div>
                      <div className="font-bold text-[14px] sm:text-[16px] text-[#48464C] mx-3 sm:mx-5 my-3 text-center sm:text-left">
                        Master of Transport <br /> in Sustainable Transport
                      </div>
                      <div className="flex items-center justify-around">
                        <div className="flex gap-1 sm:gap-2 text-[12px] sm:text-[14px] font-bold text-[#062254]">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-4 sm:size-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                              />
                            </svg>
                          </div>
                          <div className="truncate max-w-[120px] sm:max-w-[150px]">
                            Transport in Sustainable ...
                          </div>
                        </div>
                        <div className="text-[#938F96]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-3 sm:size-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Details Grid */}
                      <div className="mt-4 flex flex-wrap gap-3 items-center mx-3 sm:mx-5">
                        <div className="flex flex-col gap-3 sm:gap-4 text-[#062254] text-[10px] sm:text-[12px]">
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
                                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                              </svg>
                            </div>
                            <div>Masters</div>
                          </div>
                          <div className="flex gap-1 items-center">
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4 sm:size-5"
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
                                className="size-4 sm:size-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                />
                              </svg>
                            </div>
                            <div className="truncate max-w-[60px] sm:max-w-[100px]">
                              18,000 PLN/Year
                            </div>
                          </div>
                        </div>

                        <div>
                          <div className="flex flex-col gap-3 sm:gap-4 text-[#062254] text-[10px] sm:text-[12px]">
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
                                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                              </div>
                              <div>18 Months</div>
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
                                    d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                                  />
                                </svg>
                              </div>
                              <div>English</div>
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
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                                  />
                                </svg>
                              </div>
                              <div>Full Time</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterCards;
