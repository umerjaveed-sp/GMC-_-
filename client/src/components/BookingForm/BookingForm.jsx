import React from "react";
import booking from "../../assets/bookingform/bookingformhero.jpg";
import call from "../../assets/bookingform/callcenter.jpg";

const BookingForm = () => {
  return (
    <section className="w-auto h-auto mb-10 ">
      <div className=" ">
        <div
          className=" w-auto h-[774px] bg-cover bg-center bg-no-repeat mt-[74px]  mb-10 flex items-center justify-center"
          style={{ backgroundImage: `url(${booking})` }}
        ></div>

        <div>
          <div className="flex items-center justify-center flex-col space-y-2 mb-10">
            <h1 className="text-[30px] font-bold">
              Lorem Ipsum is simply dummy text of the printing
            </h1>
            <h1 className="text-gray-800 text-[15px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </h1>
          </div>
        </div>

        <div className="mx-12 my-20 flex gap-[28px]">
          <div className="w-[674px] h-[757px] bg-white p-10 rounded-[16px]">
            <div className=" mb-6 ml-5">
              <h2 className="text-3xl font-bold text-gray-800 mb-2 space-y-4">
                Share Your Details Our Expert Will <br /> Contact You
              </h2>
            </div>

            {/* Form */}
            <div className="rounded-[16px]   w-auto h-[525px]">
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full px-4 py-3 border bg-slate-50 rounded-lg outline-none"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full px-4 py-3 border bg-slate-50 rounded-lg outline-none"
                    />
                  </div>

                  {/* Email Address - Full Width (one per line) */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border bg-slate-50 rounded-lg outline-none"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border bg-slate-50 rounded-lg outline-none"
                    />
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      LinkedIn
                    </label>
                    <input
                      type="url"
                      placeholder="Enter your LinkedIn URL"
                      className="w-full px-4 py-3 border bg-slate-50 rounded-lg outline-none"
                    />
                  </div>

                  {/* Preferred Study Destination - Full Width */}
                  <div className="">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Study Destination
                    </label>
                    <select className="w-full px-4 py-3 border bg-slate-50 rounded-lg outline-none">
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nearest Time Branch
                    </label>
                    <select className="w-full px-4 py-3 border bg-slate-50 rounded-lg outline-none">
                      <option value="">Select branch</option>
                      <option value="lahore">Lahore</option>
                      <option value="karachi">Karachi</option>
                      <option value="islamabad">Islamabad</option>
                      <option value="rawalpindi">Rawalpindi</option>
                    </select>
                  </div>

                  {/* Preferred Mode of Counseling */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Mode of Counseling
                    </label>
                    <select className="w-full px-4 py-3 border bg-slate-50 rounded-lg outline-none">
                      <option value="">Select mode</option>
                      <option value="online">Online</option>
                      <option value="in-person">In-Person</option>
                      <option value="hybrid">Hybrid</option>
                      <option value="phone">Phone Call</option>
                    </select>
                  </div>

                  {/* Preferred Study Level - Full Width */}
                  <div className="">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Study Level
                    </label>
                    <select className="w-full px-4 py-3 border bg-slate-50 rounded-lg outline-none">
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

                {/* Submit Button */}
                <div className="mt-8 flex items-center justify-center">
                  <button
                    type="submit"
                    className="flex items-center justify-center w-[350px] h-[44px] px-6 py-[14px] gap-2 rounded-lg bg-[#74BF1A] text-white font-medium hover:bg-[#5FA016] transition-all duration-200 mt-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="w-[40%] h-auto  ">
            <img src={call} className="rounded-[8px]" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
