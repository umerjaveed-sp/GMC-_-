import React, { useState } from "react";
import webenar from "../../assets/events/webenar.jpg";
import { useNavigate } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Past Events",
    subTitle: "Tech Conference 2025",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    date: "05 May, 2025",
    time: "10:00 am",
    host: "Mr. Josh",
    location: "San Josh",
  },
  {
    id: 2,
    title: "Past Events",
    subTitle: "Design Summit",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    date: "12 June, 2025",
    time: "2:00 pm",
    host: "Ms. Sarah",
    location: "New York",
  },
  {
    id: 3,
    title: "Past Events",
    subTitle: "Innovation Workshop",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    date: "20 July, 2025",
    time: "9:30 am",
    host: "Mr. David",
    location: "Los Angeles",
  },
  {
    id: 4,
    title: "Webinare",
    subTitle: "Digital Marketing Masterclass",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    date: "15 August, 2025",
    time: "11:00 am",
    host: "Dr. Emily",
    location: "Online",
  },
  {
    id: 5,
    title: "Webinare",
    subTitle: "AI & Future Technologies",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    date: "22 September, 2025",
    time: "3:30 pm",
    host: "Prof. Michael",
    location: "Online",
  },
  {
    id: 6,
    title: "Webinare",
    subTitle: "Leadership Development ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    date: "10 October, 2025",
    time: "1:00 pm",
    host: "Ms. Jessica",
    location: "Online",
  },
];

const UpcomingEvents = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState(false);

  const toggleView = () => {
    setActiveFilter(!activeFilter);
  };

  // Determine which events to show based on filter
  const displayedEvents = activeFilter ? events : events.slice(0, 3);

  return (
    <section className="w-auto h-auto py-[48px] gap-10">
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 gap-[28px] space-y-5">
        <div>
          <div className="flex items-center justify-center flex-col space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-center">
              Our Upcoming Events
            </h1>
            <h1 className="text-gray-800 text-base sm:text-lg md:text-[20px] text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h1>
          </div>
        </div>

        {/* Cards - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 place-items-center">
          {displayedEvents.map((item) => (
            <div
              key={item.id}
              className="bg-[#092962] rounded-lg shadow-lg overflow-hidden w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] lg:w-[394px] h-auto min-h-[450px] sm:min-h-[500px] md:min-h-[540px] lg:h-[598px] mt-4 sm:mt-5 p-4 sm:p-5 gap-4 sm:gap-5 flex flex-col"
            >
              {/* Image Section */}
              <div className="rounded-[8px] flex items-center justify-center w-full border border-[#092962]">
                <img
                  src={webenar}
                  alt={item.title}
                  className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] lg:w-[366px] h-[150px] sm:h-[170px] md:h-[185px] lg:h-[205px] rounded-[12px] object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="space-y-3 sm:space-y-4 text-white flex-1 flex flex-col">
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-xl sm:text-2xl md:text-[25px] font-bold">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-sm lg:text-sm leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Event Details */}
                <div className="flex-1 space-y-1.5 sm:space-y-2">
                  <div className="flex gap-2 sm:gap-3 md:gap-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 sm:size-5 md:size-5 lg:size-6 text-[rgba(116,191,26,1)] flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                    <span className="font-semibold text-xs sm:text-sm md:text-sm lg:text-base">
                      {item.date}
                    </span>
                  </div>

                  <div className="flex gap-2 sm:gap-3 md:gap-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 sm:size-5 md:size-5 lg:size-6 text-[rgba(116,191,26,1)] flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    <span className="font-semibold text-xs sm:text-sm md:text-sm lg:text-base">
                      {item.time}
                    </span>
                  </div>

                  <div className="flex gap-2 sm:gap-3 md:gap-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 sm:size-5 md:size-5 lg:size-6 text-[rgba(116,191,26,1)] flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <span className="font-semibold text-xs sm:text-sm md:text-sm lg:text-base">
                      {item.host}
                    </span>
                  </div>

                  <div className="flex gap-2 sm:gap-3 md:gap-4 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 sm:size-5 md:size-5 lg:size-6 text-[rgba(116,191,26,1)] flex-shrink-0"
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
                    <span className="font-semibold text-xs sm:text-sm md:text-sm lg:text-base">
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Register Button */}
                <button
                  className="flex items-center justify-center w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] lg:max-w-[200px] h-[36px] sm:h-[38px] md:h-[40px] lg:h-[44px] px-1 py-1 gap-2 rounded-lg bg-[rgba(116,191,26,1)] font-medium text-white hover:bg-[#5FA016] transition-all duration-200 text-xs sm:text-sm md:text-sm lg:text-base mx-auto sm:mx-0"
                  onClick={() => navigate("/register")}
                >
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View More / View Less Button */}
      <div
        className="flex items-center justify-center mt-16 cursor-pointer text-[rgba(116,191,26,1)] font-bold text-[15px] hover:text-[#5FA016] transition-colors"
        onClick={toggleView}
      >
        <div>{activeFilter ? "View Less" : "View More"}</div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
