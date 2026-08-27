import React from "react";
import people from "../../assets/events/webenar.jpg";
import tower from "../../assets/about/tower.jpg";

const BlogPage = () => {
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
    <section className="w-full h-auto">
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
            <div className="w-full h-auto py-4 px-2 sm:px-4 md:px-[8px] text-gray-800 space-y-4 sm:space-y-5">
              <h1 className="text-3xl sm:text-4xl md:text-[50px] font-bold mb-6 sm:mb-8 md:mb-10">
                Technology
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-[35px] font-semibold">
                Learn & Build
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
              <h2 className="text-xl sm:text-2xl md:text-[25px] font-semibold">
                Learn & Build
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
              <h2 className="text-lg sm:text-xl md:text-[20px] font-semibold">
                Design It Better
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

          {/* Sidebar - Recent Blogs */}
          <div className="w-full lg:w-[392px] h-auto lg:h-[332px] p-4 sm:p-5 bg-white rounded-[16px] lg:ml-10">
            <h2 className="text-xl sm:text-2xl md:text-[25px] font-bold mb-4 sm:mb-6">
              Recent Blogs
            </h2>

            {/* Blog Item 1 */}
            <div className="flex gap-3 sm:gap-5 mb-4 sm:mb-6">
              <div className="w-[72px] sm:w-[92px] h-[48px] sm:h-[61px] flex-shrink-0">
                <img
                  src={tower}
                  className="w-full h-full object-cover rounded-[4px]"
                  alt="Blog thumbnail"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-[10px] sm:text-[11px] font-semibold mb-1 sm:mb-2 leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <div className="flex gap-3 sm:gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3 sm:w-[13px] sm:h-[13px] text-[#74BF1A] flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#605D64]">
                    05 May, 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Blog Item 2 */}
            <div className="flex gap-3 sm:gap-5 mb-4 sm:mb-6">
              <div className="w-[72px] sm:w-[92px] h-[48px] sm:h-[61px] flex-shrink-0">
                <img
                  src={tower}
                  className="w-full h-full object-cover rounded-[4px]"
                  alt="Blog thumbnail"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-[10px] sm:text-[11px] font-semibold mb-1 sm:mb-2 leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <div className="flex gap-3 sm:gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3 sm:w-[13px] sm:h-[13px] text-[#74BF1A] flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#605D64]">
                    05 May, 2025
                  </span>
                </div>
              </div>
            </div>

            {/* Blog Item 3 */}
            <div className="flex gap-3 sm:gap-5">
              <div className="w-[72px] sm:w-[92px] h-[48px] sm:h-[61px] flex-shrink-0">
                <img
                  src={tower}
                  className="w-full h-full object-cover rounded-[4px]"
                  alt="Blog thumbnail"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-[10px] sm:text-[11px] font-semibold mb-1 sm:mb-2 leading-tight">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h2>
                <div className="flex gap-3 sm:gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 h-3 sm:w-[13px] sm:h-[13px] text-[#74BF1A] flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#605D64]">
                    05 May, 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
