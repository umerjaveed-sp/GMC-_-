import React from "react";
import formimg from "../../assets/home/formimg.jpg";

const Form = () => {
  return (
    <section className="w-full h-auto bg-white py-[48px] my-8 md:my-12">
      <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-[28px]">
        {/* Image Section - Hidden on sm and md */}
        <div className="hidden lg:block w-full lg:w-[40%] h-auto">
          <img
            src={formimg}
            className="w-full h-auto rounded-[8px] object-cover"
            alt="Contact form illustration"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-[60%] h-auto">
          <div className="mb-4 md:mb-6 ml-0 lg:ml-5">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 space-y-2 sm:space-y-4 text-center lg:text-left">
              Share Your Details Our Expert Will{" "}
              <br className="hidden sm:block" /> Contact You
            </h2>
          </div>

          {/* Form */}
          <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 w-full lg:max-w-[712px] h-auto">
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border bg-slate-50 rounded-lg outline-none focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border bg-slate-50 rounded-lg outline-none focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  />
                </div>

                {/* Email Address - Full Width */}
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border bg-slate-50 rounded-lg outline-none focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border bg-slate-50 rounded-lg outline-none focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  />
                </div>

                {/* LinkedIn */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    LinkedIn
                  </label>
                  <input
                    type="url"
                    placeholder="Enter your LinkedIn URL"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border bg-slate-50 rounded-lg outline-none focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  />
                </div>

                {/* Preferred Study Destination */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Preferred Study Destination
                  </label>
                  <select className="w-full px-3 sm:px-4 py-2 sm:py-3 border bg-slate-50 rounded-lg outline-none focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent transition-all duration-200 text-sm sm:text-base">
                    <option value="">Select destination</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="canada">Canada</option>
                    <option value="australia">Australia</option>
                    <option value="germany">Germany</option>
                    <option value="france">France</option>
                  </select>
                </div>

                {/* Nearest Time Branch */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Nearest Time Branch
                  </label>
                  <select className="w-full px-3 sm:px-4 py-2 sm:py-3 border bg-slate-50 rounded-lg outline-none focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent transition-all duration-200 text-sm sm:text-base">
                    <option value="">Select branch</option>
                    <option value="lahore">Lahore</option>
                    <option value="karachi">Karachi</option>
                    <option value="islamabad">Islamabad</option>
                    <option value="rawalpindi">Rawalpindi</option>
                  </select>
                </div>

                {/* Preferred Mode of Counseling */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Preferred Mode of Counseling
                  </label>
                  <select className="w-full px-3 sm:px-4 py-2 sm:py-3 border bg-slate-50 rounded-lg outline-none focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent transition-all duration-200 text-sm sm:text-base">
                    <option value="">Select mode</option>
                    <option value="online">Online</option>
                    <option value="in-person">In-Person</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="phone">Phone Call</option>
                  </select>
                </div>

                {/* Preferred Study Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Preferred Study Level
                  </label>
                  <select className="w-full px-3 sm:px-4 py-2 sm:py-3 border bg-slate-50 rounded-lg outline-none focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent transition-all duration-200 text-sm sm:text-base">
                    <option value="">Select study level</option>
                    <option value="bachelors">Bachelor's</option>
                    <option value="masters">Master's</option>
                    <option value="phd">PhD</option>
                    <option value="diploma">Diploma</option>
                    <option value="certificate">Certificate</option>
                    <option value="foundation">Foundation</option>
                  </select>
                </div>
              </div>

              {/* Submit Button - Reduced width on sm and md */}
              <div className="mt-6 sm:mt-8 flex items-center justify-center">
                <button
                  type="submit"
                  className="flex items-center justify-center w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] h-[44px] px-6 py-[14px] gap-2 rounded-lg bg-[#74BF1A] text-white font-medium hover:bg-[#5FA016] transition-all duration-200 text-sm sm:text-base"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
