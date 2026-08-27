import React from "react";
import people from "../../assets/events/webenar.jpg";

function RegisterNow() {
  const list = [
    {
      id: 1,
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 5,
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <section className="w-full h-auto bg-gray-50">
      {/* Hero Section */}
      <div>
        <div
          className="w-full h-[300px] sm:h-[500px] md:h-[600px] lg:h-[774px] bg-cover bg-center bg-no-repeat mb-6 sm:mb-8 lg:mb-10 flex items-center justify-center"
          style={{ backgroundImage: `url(${people})` }}
        ></div>

        {/* Content */}
        <div className="h-auto w-full px-4 sm:px-6 md:px-8 lg:px-20 py-6 sm:py-8 md:py-10 lg:py-[48px] flex flex-col lg:flex-row gap-6 lg:gap-[22px]">
          {/* Main Content */}
          <div className="w-full lg:w-[722px] h-auto">
            {/* Event Details */}
            <div className="w-full text-gray-800 space-y-6 sm:space-y-8 md:space-y-10">
              <h1 className="text-2xl sm:text-3xl md:text-[40px] font-bold">
                Peshawar Study Abroad Expo 2025
              </h1>

              <div className="space-y-4 sm:space-y-6 text-gray-600">
                {/* Date */}
                <div className="flex gap-3 sm:gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[rgba(116,191,26,1)] flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                  <span className="text-lg sm:text-xl md:text-[25px] font-semibold">
                    05/05/2025
                  </span>
                </div>

                {/* Time */}
                <div className="flex gap-3 sm:gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[rgba(116,191,26,1)] flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="text-lg sm:text-xl md:text-[25px] font-semibold">
                    8:00 pm
                  </span>
                </div>

                {/* Speaker */}
                <div className="flex gap-3 sm:gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[rgba(116,191,26,1)] flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  <span className="text-lg sm:text-xl md:text-[25px] font-semibold">
                    Mrs Jhon
                  </span>
                </div>

                {/* Location */}
                <div className="flex gap-3 sm:gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[rgba(116,191,26,1)] flex-shrink-0"
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
                  <span className="text-lg sm:text-xl md:text-[25px] font-semibold">
                    Karachi
                  </span>
                </div>
              </div>
            </div>

            {/* Blog Content */}
            <div className="w-full h-auto py-4 px-2 sm:px-4 md:px-[8px] text-gray-800 space-y-4 sm:space-y-5 mt-6 sm:mt-8">
              <div className="text-xl sm:text-2xl md:text-4xl lg:text-[50px] font-bold space-y-4 leading-tight">
                Joins the Global Minds
                <br />
                Consultant Study Abroad
                <br />
                Expo 2025
              </div>
              <h2 className="text-xl sm:text-2xl md:text-[30px] font-semibold">
                The Grand Study Abroad Expo 2025 awaits you!
              </h2>
              <p className="text-sm sm:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="text-sm sm:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <h2 className="text-xl sm:text-2xl md:text-[25px] font-semibold">
                Parameters of Expo:
              </h2>
              {list.map((item) => (
                <div className="flex gap-3 sm:gap-5" key={item.id}>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#74BF1A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div className="text-sm sm:text-base">{item.paragraph}</div>
                </div>
              ))}
              <h2 className="text-xl sm:text-2xl md:text-[25px] font-semibold">
                Why Should I attend?
              </h2>
              {list.map((item) => (
                <div className="flex gap-3 sm:gap-5" key={item.id}>
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#74BF1A] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div className="text-sm sm:text-base">{item.paragraph}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div className="w-full lg:w-[498px] h-auto lg:h-[570px] p-4 sm:p-5 bg-white rounded-[16px] shadow-md">
            <div className="flex items-center justify-center mb-6 sm:mb-8 lg:mb-10">
              <div className="text-xl sm:text-2xl md:text-[30px] font-bold text-gray-800">
                Reserve Your Seat
              </div>
            </div>
            <form>
              <div className="mb-4 sm:mb-[18px]">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full box-border px-4 sm:px-[18px] py-3 sm:py-4 text-sm sm:text-[15px] text-gray-700 bg-gray-100 border-none rounded-[10px] outline-none placeholder-gray-400 focus:shadow-[0_0_0_2px_#cfe0f5]"
                />
              </div>

              <div className="mb-4 sm:mb-[18px]">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full box-border px-4 sm:px-[18px] py-3 sm:py-4 text-sm sm:text-[15px] text-gray-700 bg-gray-100 border-none rounded-[10px] outline-none placeholder-gray-400 focus:shadow-[0_0_0_2px_#cfe0f5]"
                />
              </div>

              <div className="mb-4 sm:mb-[18px]">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full box-border px-4 sm:px-[18px] py-3 sm:py-4 text-sm sm:text-[15px] text-gray-700 bg-gray-100 border-none rounded-[10px] outline-none placeholder-gray-400 focus:shadow-[0_0_0_2px_#cfe0f5]"
                />
              </div>

              <div className="mb-4 sm:mb-[18px]">
                <input
                  type="text"
                  placeholder="Country interested in"
                  className="w-full box-border px-4 sm:px-[18px] py-3 sm:py-4 text-sm sm:text-[15px] text-gray-700 bg-gray-100 border-none rounded-[10px] outline-none placeholder-gray-400 focus:shadow-[0_0_0_2px_#cfe0f5]"
                />
              </div>

              <div className="mb-4 sm:mb-[18px]">
                <input
                  type="text"
                  placeholder="Study Level"
                  className="w-full box-border px-4 sm:px-[18px] py-3 sm:py-4 text-sm sm:text-[15px] text-gray-700 bg-gray-100 border-none rounded-[10px] outline-none placeholder-gray-400 focus:shadow-[0_0_0_2px_#cfe0f5]"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3 sm:py-4 text-sm sm:text-base font-bold text-white bg-[#6cbe28] hover:bg-[#5fa822] border-none rounded-[10px] cursor-pointer transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterNow;
