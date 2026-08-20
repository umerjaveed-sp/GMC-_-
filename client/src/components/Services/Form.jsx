import React from "react";
import formimg from "../../assets/home/formimg.jpg";

const Form = () => {
  return (
    <section className="w-full h-auto  py-[48px] my-12 ">
      <div className="mx-20 flex gap-[28px]">
        <div className="w-[500px] h-[669px]  ">
          <img src={formimg} className="rounded-[8px]" alt="" />
        </div>
        <div className="w-[60%] bg-white py-2 h-[709px]">
          <div className=" mb-6 ml-5">
            <h2 className="text-[35px] font-bold text-gray-800 mb-2 space-y-4">
              Share Your Details Our Expert Will <br /> Contact You
            </h2>
          </div>

          {/* Form */}
          <div className="bg-white  rounded-lg p-8 w-[712px] h-auto">
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
                    className="w-full px-4 py-3 border bg-[#F5EFF7] rounded-lg outline-none"
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
                    className="w-full px-4 py-3 border bg-[#F5EFF7] rounded-lg outline-none"
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
                    className="w-full px-4 py-3 border bg-[#F5EFF7] rounded-lg outline-none"
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
                    className="w-full px-4 py-3 border bg-[#F5EFF7] rounded-lg outline-none"
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
                    className="w-full px-4 py-3 border bg-[#F5EFF7] rounded-lg outline-none"
                  />
                </div>

                {/* Preferred Study Destination - Full Width */}
                <div className="">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Study Destination
                  </label>
                  <select className="w-full px-4 py-3 border bg-[#F5EFF7] rounded-lg outline-none">
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
                  <select className="w-full px-4 py-3 border bg-[#F5EFF7] rounded-lg outline-none">
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
                  <select className="w-full px-4 py-3 border bg-[#F5EFF7] rounded-lg outline-none">
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
                  <select className="w-full px-4 py-3 border bg-[#F5EFF7] rounded-lg outline-none">
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
                  className="flex items-center justify-center w-[350px] h-[44px] px-6 py-[14px] gap-2 rounded-lg bg-[#74BF1A] text-white font-medium hover:bg-[#5FA016] transition-all duration-200 "
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
