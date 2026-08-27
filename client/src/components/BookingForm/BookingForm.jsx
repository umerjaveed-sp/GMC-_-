import React from "react";
import booking from "../../assets/bookingform/bookingformhero.jpg";
import call from "../../assets/bookingform/callcenter.jpg";

const BookingForm = () => {
  return (
    <section className="w-auto h-auto mb-10 ">
      <div className=" ">
        <div
          className=" w-auto h-[300px] sm:h-[400px] md:h-[600px] lg:h-[774px] bg-cover bg-center bg-no-repeat mt-[49px] md:mt-[74px]  mb-10 flex items-center justify-center"
          style={{ backgroundImage: `url(${booking})` }}
        ></div>

        <div>
          <div className="flex items-center justify-center flex-col space-y-3 sm:space-y-4 mb-8 sm:mb-10 px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[30px] font-bold text-center leading-tight">
              Lorem Ipsum is simply dummy text of the printing
            </h1>
            <p className="text-gray-800 text-sm sm:text-base md:text-[15px] text-center max-w-3xl mx-auto leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row gap-6 lg:gap-8 
                mx-4 sm:mx-6 md:mx-8 lg:mx-12 
                my-10 sm:my-14 md:my-16 lg:my-20"
        >
          {/* Form Card */}
          <div className="w-full md:w-[60%] lg:w-[674px] h-auto bg-white p-5 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
            <div className="mb-6 ml-0 sm:ml-3">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug">
                Share Your Details Our Expert Will{" "}
                <br className="hidden sm:block" /> Contact You
              </h2>
            </div>

            {/* Form */}
            <div className="w-full">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full px-4 py-3 border bg-slate-50 rounded-lg outline-none 
                       focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent
                       transition-all duration-200"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full px-4 py-3 border bg-slate-50 rounded-lg outline-none 
                       focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent
                       transition-all duration-200"
                    />
                  </div>

                  {/* Email Address - Full Width */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border bg-slate-50 rounded-lg outline-none 
                       focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent
                       transition-all duration-200"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border bg-slate-50 rounded-lg outline-none 
                       focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent
                       transition-all duration-200"
                    />
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      LinkedIn
                    </label>
                    <input
                      type="url"
                      placeholder="Enter your LinkedIn URL"
                      className="w-full px-4 py-3 border bg-slate-50 rounded-lg outline-none 
                       focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent
                       transition-all duration-200"
                    />
                  </div>

                  {/* Preferred Study Destination - Full Width */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Preferred Study Destination
                    </label>
                    <select
                      className="w-full px-4 py-3 border bg-slate-50 rounded-lg outline-none 
                             focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent
                             transition-all duration-200"
                    >
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
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Nearest Time Branch
                    </label>
                    <select
                      className="w-full px-4 py-3 border bg-slate-50 rounded-lg outline-none 
                             focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent
                             transition-all duration-200"
                    >
                      <option value="">Select branch</option>
                      <option value="lahore">Lahore</option>
                      <option value="karachi">Karachi</option>
                      <option value="islamabad">Islamabad</option>
                      <option value="rawalpindi">Rawalpindi</option>
                    </select>
                  </div>

                  {/* Preferred Mode of Counseling */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Preferred Mode of Counseling
                    </label>
                    <select
                      className="w-full px-4 py-3 border bg-slate-50 rounded-lg outline-none 
                             focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent
                             transition-all duration-200"
                    >
                      <option value="">Select mode</option>
                      <option value="online">Online</option>
                      <option value="in-person">In-Person</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="phone">Phone Call</option>
                    </select>
                  </div>

                  {/* Preferred Study Level - Full Width */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Preferred Study Level
                    </label>
                    <select
                      className="w-full px-4 py-3 border bg-slate-50 rounded-lg outline-none 
                             focus:ring-2 focus:ring-[#74BF1A] focus:border-transparent
                             transition-all duration-200"
                    >
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

                {/* Submit Button - Responsive */}
                <div className="mt-8 flex items-center justify-center">
                  <button
                    type="submit"
                    className="flex items-center justify-center 
                     w-full sm:w-[300px] md:w-[350px] 
                     h-[52px] px-6 py-3 
                     rounded-lg bg-[#74BF1A] text-white font-semibold 
                     hover:bg-[#5FA016] transition-all duration-200 
                     shadow-md hover:shadow-lg text-base sm:text-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right Image - Hidden on mobile, visible from md (tablet) and up */}
          <div className="hidden md:block md:w-[40%] lg:w-[40%] h-auto">
            <img
              src={call}
              className="w-full h-auto rounded-xl shadow-lg object-cover 
               min-h-[300px] md:min-h-[400px] lg:min-h-[500px]"
              alt="Call center representative"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
