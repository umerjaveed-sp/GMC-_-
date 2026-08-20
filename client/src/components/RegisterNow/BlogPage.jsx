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
    <section className="w-auto h-auto ">
      {/* Hero Section  */}
      <div>
        <div
          className=" w-full h-[774px]  bg-cover bg-center bg-no-repeat mb-10 flex items-center justify-center"
          style={{ backgroundImage: `url(${people})` }}
        ></div>

        {/* content  */}

        <div className="h-auto w-auto py-[48px] gap-[22px] mx-20 flex">
          <div className="w-[722px] h-auto gap-[40px]">
            <div className="w-[722px] h-auto py-5 px-[8px] gap-[32px] text-gray-800 space-y-5">
              <h1 className="text-[50px] font-bold mb-10">Technology</h1>
              <h2 className="text-[35px] font-semibold">Learn & Build</h2>
              <p>
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
              <h2 className="text-[25px] font-semibold">Learn & Build</h2>
              <p>
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
              <h2 className="text-[20px] font-semibold">Design It Better</h2>
              {list.map(() => (
                <div className="flex gap-5" key={list.id}>
                  <div className="w-6 h-6 rounded-full bg-[#74BF1A] flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>

                  <div>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Form  */}
          <div className="w-[392px] h-[332px]  gap-[40px] p-5 bg-white rounded-[16px] ml-10">
            <h2 className="text-[25px] font-bold mb-6">Recent Blogs</h2>
            <div className="flex gap-5 mb-4">
              <div className="w-[92px] h-[61px] ">
                <img
                  src={tower}
                  className="object-cover rounded-[4px]"
                  alt=""
                />
              </div>
              <div>
                <div>
                  <h2 className="text-[11px] font-semibold mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h2>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex-1 space-y-2">
                    <div className="flex gap-4 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-[13px] text-[#74BF1A] flex-shrink-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                        />
                      </svg>
                      <span className="  text-[11px] font-semibold text-[#605D64]">
                        05 May, 2025
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 mb-4">
              <div className="w-[92px] h-[61px] ">
                <img
                  src={tower}
                  className="object-cover rounded-[4px]"
                  alt=""
                />
              </div>
              <div>
                <div>
                  <h2 className="text-[11px] font-semibold mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h2>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex-1 space-y-2">
                    <div className="flex gap-4 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-[13px] text-[#74BF1A] flex-shrink-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                        />
                      </svg>
                      <span className="  text-[11px] font-semibold text-[#605D64]">
                        05 May, 2025
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-[92px] h-[61px] ">
                <img
                  src={tower}
                  className="object-cover rounded-[4px]"
                  alt=""
                />
              </div>
              <div>
                <div>
                  <h2 className="text-[11px] font-semibold mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </h2>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex-1 space-y-2">
                    <div className="flex gap-4 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-[13px] text-[#74BF1A] flex-shrink-0"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                        />
                      </svg>
                      <span className="  text-[11px] font-semibold text-[#605D64]">
                        05 May, 2025
                      </span>
                    </div>
                  </div>
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
