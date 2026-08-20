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
            <div className="w=[710px] h-[428px]  text-gray-800 space-y-10">
              <h1 className=" text-[40px] font-bold">
                Peshawar Study Abroad Expo 2025
              </h1>
              <div className="flex-1 space-y-10 text-gray-600">
                <div className="flex gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10 text-[rgba(116,191,26,1)] flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                  <span className="text-[25px]  font-semibold">05/05/2025</span>
                </div>

                <div className="flex gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10 text-[rgba(116,191,26,1)] flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span className="text-[25px]  font-semibold">8:00 pm</span>
                </div>

                <div className="flex gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10 text-[rgba(116,191,26,1)] flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>
                  <span className=" text-[25px]  font-semibold">Mrs Jhon</span>
                </div>

                <div className="flex gap-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-10 text-[rgba(116,191,26,1)] flex-shrink-0"
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
                  <span className="text-[25px]  font-semibold">Karachi</span>
                </div>
              </div>
            </div>
            <div className="w-[722px] h-auto py-5 px-[8px] gap-[32px] text-gray-800 space-y-5">
              <h1 className="text-[50px] font-bold">
                Joins the Global Minds Consultant Study Abroad Expo 2025
              </h1>
              <h2 className="text-[30px] font-semibold">
                The Grand Study Abroad Expo 2025 awaits you!
              </h2>
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
              <h2 className="text-[25px] font-semibold">Parameters of Expo:</h2>
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
              <h2 className="text-[25px] font-semibold">
                Why Should I attend?
              </h2>
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
          <div className="w-[498px] h-[578px]  gap-[40px] p-5 bg-white rounded-[16px]">
            <div className="flex items-center justify-center mb-10">
              <div className="text-[30px] font-bold text-gray-800">
                Reserve Your Seat
              </div>
            </div>
            <form>
              <div className="mb-[18px]">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full box-border px-[18px] py-4 text-[15px] text-gray-700 bg-gray-100 border-none rounded-[10px] outline-none placeholder-gray-400 focus:shadow-[0_0_0_2px_#cfe0f5]"
                />
              </div>

              <div className="relative mb-[18px]">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full box-border px-[18px] py-4 text-[15px] text-gray-700 bg-gray-100 border-none rounded-[10px] outline-none placeholder-gray-400 focus:shadow-[0_0_0_2px_#cfe0f5]"
                />
                <div className="absolute right-10 -bottom-1.5 w-1.5 h-1.5 rounded-full " />
              </div>

              <div className="relative mb-[18px]">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full box-border px-[18px] py-4 text-[15px] text-gray-700 bg-gray-100 border-none rounded-[10px] outline-none placeholder-gray-400 focus:shadow-[0_0_0_2px_#cfe0f5]"
                />
                <div className="absolute right-24 -bottom-1.5 w-1.5 h-1.5 rounded-full " />
              </div>

              <div className="mb-[18px]">
                <input
                  type="text"
                  placeholder="Country interested in"
                  className="w-full box-border px-[18px] py-4 text-[15px] text-gray-700 bg-gray-100 border-none rounded-[10px] outline-none placeholder-gray-400 focus:shadow-[0_0_0_2px_#cfe0f5]"
                />
              </div>

              <div className="mb-[18px]">
                <input
                  type="text"
                  placeholder="Study Level"
                  className="w-full box-border px-[18px] py-4 text-[15px] text-gray-700 bg-gray-100 border-none rounded-[10px] outline-none placeholder-gray-400 focus:shadow-[0_0_0_2px_#cfe0f5]"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-4 text-base font-bold text-white bg-[#6cbe28] hover:bg-[#5fa822] border-none rounded-[10px] cursor-pointer"
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
