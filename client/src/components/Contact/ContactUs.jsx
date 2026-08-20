import React from "react";
import contact from "../../assets/Contact/contactus.jpg";

const ContactUs = () => {
  return (
    <section className=" ">
      <div className="">
        <div
          className=" w-full h-[842px]  bg-cover bg-center bg-no-repeat mb-10 flex items-center justify-center relative"
          style={{ backgroundImage: `url(${contact})` }}
        >
          {/* Content Container */}
          <div className="w-[918px] h-[399px] rounded-[16px] border bg-[#041C47]/30 flex items-center justify-center ">
            <div className="w-[728px] h-[116px] gap-[24px] text-white ">
              <div className=" flex items-center justify-center flex-col space-y-5">
                <h1 className="text-[40px] font-semibold">Contact Us</h1>
                <div className="w-[528px] h-[48px] text-[20px]">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-auto h-[480px]">
          <div className="w-[1240px] h-[644px] bg-white rounded-[16px] absolute top-[681px] left-[50px] flex gap-16">
            <div className="w-[498px] h-[644px] bg-[#FAFAFA] p-10 pt-[61px] rounded-[16px] space-y-5">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl font-bold text-slate-900">
                  Get in touch
                </h2>
                <p className="text-[15px] text-[#605D64] leading-relaxed">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {/* Head Office */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#092962] flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#041C47] mb-1">
                      Head Office
                    </h3>
                    <p className="text-sm text-[#041C47] leading-relaxed">
                      Noori gate, Silanwali road
                      <br />
                      Sargodha - Pakistan
                    </p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#092962] flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#041C47] mb-1">
                      Phone Number
                    </h3>
                    <p className="text-sm text-[#041C47] leading-relaxed">
                      +92-0000-000
                      <br />
                      +92-0000-000
                    </p>
                  </div>
                </div>

                {/* E-mail */}
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-11 h-11 rounded-full bg-[#092962] flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#041C47] mb-1">
                      E-mail
                    </h3>
                    <p className="text-sm text-[#041C47] leading-relaxed">
                      dummy@gmail.com
                      <br />
                      dummy@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Social media */}
              <div className="flex flex-col gap-3">
                <h3 className="text-sm font-bold text-slate-900">
                  Follow us on social media
                </h3>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#092962] flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12a10 10 0 10-11.5 9.87v-6.99H7.9v-2.88h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.8-1.68 1.62v1.94h2.85l-.46 2.88h-2.39v6.99A10 10 0 0022 12z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#092962] flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47a4.9 4.9 0 00-1.77 1.15A4.9 4.9 0 002.53 5.45c-.25.64-.42 1.37-.47 2.43C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43a4.9 4.9 0 001.15 1.77 4.9 4.9 0 001.77 1.15c.64.25 1.37.42 2.43.47C8.94 21.99 9.28 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47a4.9 4.9 0 001.77-1.15 4.9 4.9 0 001.15-1.77c.25-.64.42-1.37.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 00-1.15-1.77 4.9 4.9 0 00-1.77-1.15c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.72 2 12 2zm0 1.8c2.67 0 2.99.01 4.04.06.98.04 1.5.21 1.86.35.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.36.31.88.35 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.04.98-.21 1.5-.35 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.36.14-.88.31-1.86.35-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.98-.04-1.5-.21-1.86-.35a3.1 3.1 0 01-1.15-.75 3.1 3.1 0 01-.75-1.15c-.14-.36-.31-.88-.35-1.86-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.04-.98.21-1.5.35-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.14.88-.31 1.86-.35 1.05-.05 1.37-.06 4.04-.06z" />
                      <path d="M12 7.38a4.62 4.62 0 100 9.24 4.62 4.62 0 000-9.24zm0 7.62a3 3 0 110-6 3 3 0 010 6z" />
                      <circle cx="16.8" cy="7.2" r="1.08" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#092962] flex items-center justify-center"
                  >
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7 0h3.6v1.64h.05c.5-.94 1.73-1.94 3.56-1.94 3.81 0 4.51 2.5 4.51 5.76V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4V9z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-[49px]">
              <div className="w-[644px] flex flex-col  pt-6 rounded-2xl bg-white space-y-5">
                <h2 className="text-[25px] font-bold text-slate-900 mb-1">
                  Send us a message
                </h2>

                <input
                  type="text"
                  placeholder="Name"
                  className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-700 placeholder-slate-400 outline-none "
                />

                <input
                  type="email"
                  placeholder="E-mail"
                  className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-700 placeholder-slate-400 outline-none "
                />

                <div className="relative">
                  <select
                    defaultValue=""
                    className="w-full h-12 px-4 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-500 outline-none appearance-none "
                  >
                    <option value="" disabled>
                      Select Country
                    </option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="pk">Pakistan</option>
                    <option value="ca">Canada</option>
                    <option value="au">Australia</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-slate-50 text-sm text-slate-700 placeholder-slate-400 outline-none resize-none "
                />

                <button className="w-full h-12 rounded-lg bg-[#092962]   text-white text-sm font-medium hover:bg-[#0b234b] transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
