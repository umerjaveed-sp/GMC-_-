import React, { useState } from "react";
import webenar from "../../assets/events/webenar.jpg";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    category: "Technology",
    title: "The Future of AI in Web Development",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "05 May, 2025",
    author: "Mr. Josh",
    image: "https://via.placeholder.com/400x200",
    readTime: "5 min read",
  },
  {
    id: 2,
    category: "Design",
    title: "10 UI/UX Trends for 2025",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "12 June, 2025",
    author: "Ms. Sarah",
    image: "https://via.placeholder.com/400x200",
    readTime: "4 min read",
  },
  {
    id: 3,
    category: "Development",
    title: "Mastering React Hooks",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "20 July, 2025",
    author: "Mr. David",
    image: "https://via.placeholder.com/400x200",
    readTime: "6 min read",
  },
  {
    id: 4,
    category: "Marketing",
    title: "Digital Marketing Strategies",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "15 August, 2025",
    author: "Dr. Emily",
    image: "https://via.placeholder.com/400x200",
    readTime: "3 min read",
  },
  {
    id: 5,
    category: "Technology",
    title: "Blockchain Beyond Cryptocurrency",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "22 September, 2025",
    author: "Prof. Michael",
    image: "https://via.placeholder.com/400x200",
    readTime: "7 min read",
  },
  {
    id: 6,
    category: "Business",
    title: "Leadership in Modern Workplace",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
    date: "10 October, 2025",
    author: "Ms. Jessica",
    image: "https://via.placeholder.com/400x200",
    readTime: "4 min read",
  },
];

const LatestBlog = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState(false);

  const toggleView = () => {
    setActiveFilter(!activeFilter);
  };

  // Determine which events to show based on filter
  const displayedBlogs = activeFilter ? blogPosts : blogPosts.slice(0, 3);
  return (
    <section className="w-auto h-auto py-[48px] gap-10 bg-white">
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 gap-[28px] space-y-5">
        <div>
          <div className="flex items-center justify-center flex-col space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-center">
              Our Latest Blogs
            </h1>
            <h1 className="text-gray-800 text-base sm:text-lg md:text-[20px] text-center">
              Boost your test scores with experts resources
            </h1>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-5 place-items-center">
          {displayedBlogs.map((item) => (
            <div
              key={item.id}
              className="bg-[#98D94A] rounded-lg shadow-lg overflow-hidden w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] lg:w-[394px] h-auto min-h-[450px] sm:min-h-[480px] md:min-h-[520px] lg:h-[557px] mt-4 sm:mt-5 p-4 sm:p-5 gap-2 flex flex-col"
            >
              {/* Image Section */}
              <div className="rounded-[8px] flex items-center justify-center w-full border">
                <img
                  src={webenar}
                  alt={item.title}
                  className="w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] lg:w-[366px] h-[150px] sm:h-[170px] md:h-[185px] lg:h-[205px] rounded-[12px] object-cover"
                />
              </div>

              <div className="flex items-center justify-between text-[#041C47]">
                <div className="flex gap-1 sm:gap-2 items-center">
                  <div>
                    <svg
                      width="20"
                      sm:width="22"
                      md:width="24"
                      lg:width="25"
                      height="20"
                      sm:height="22"
                      md:height="24"
                      lg:height="25"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-5 sm:w-5 md:w-6 lg:w-6 h-5 sm:h-5 md:h-6 lg:h-6"
                    >
                      <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div className="font-semibold text-sm sm:text-base md:text-lg lg:text-[20px]">
                    Blog Category
                  </div>
                </div>

                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 sm:size-5 md:size-6 lg:size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-2 flex-1 flex flex-col">
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-xl sm:text-2xl md:text-[25px] text-[#322F35] font-bold">
                    {item.category}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#605D64] leading-relaxed line-clamp-3">
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
                      className="size-4 sm:size-5 md:size-5 lg:size-6 text-[#062254] flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                    <span className="font-semibold text-xs sm:text-sm md:text-sm lg:text-base text-[#605D64]">
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
                      className="size-4 sm:size-5 md:size-5 lg:size-6 text-[#062254] flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <span className="font-semibold text-xs sm:text-sm md:text-sm lg:text-base text-[#605D64]">
                      {item.author}
                    </span>
                  </div>
                </div>

                {/* Read More Button */}
                <button
                  className="flex items-center justify-center w-full max-w-[100px] sm:max-w-[110px] md:max-w-[120px] lg:max-w-[120px] h-[36px] sm:h-[38px] md:h-[40px] lg:h-[44px] px-1 py-1 gap-2 rounded-lg bg-[#062254] font-medium text-white hover:bg-[#071731] transition-all duration-200 text-xs sm:text-sm md:text-sm lg:text-base"
                  onClick={() => navigate("/blogPage")}
                >
                  Read More
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

export default LatestBlog;
