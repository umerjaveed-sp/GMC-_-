import React from "react";
import logo from "../assets/home/logo.png";
import blog from "../assets/home/blog.jpg";
import { useNavigate } from "react-router-dom";

const navItems = [
  { id: 1, label: "About Us", href: "/about" },
  { id: 2, label: "Events", href: "/event" },
  { id: 3, label: "Blog", href: "/blog" },
  { id: 4, label: "Services", href: "/services" },
  { id: 5, label: "Study Destination", href: "/destinations" },
];

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-auto  bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        {/* Main Footer Content - Responsive Grid with Centered Items */}
        <div className="grid ml-2 grid-cols-2  items-start sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 lg:gap-4 justify-center">
          {/* Column 1: Logo + Social Media */}
          <div className="flex flex-col items-center sm:items-start w-full max-w-[267px]">
            <div
              className="flex flex-col items-start pl-2 sm:items-start cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img
                src={logo}
                className=" w-[140px] sm:w-[167px] h-[65px] sm:h-[77px] object-cover"
                alt="Logo"
              />
              <p className="text-gray-600 text-center sm:text-left text-sm sm:text-base ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="h-[48px] w-[210px] p-3 gap-[30px] rounded-[8px] bg-[#021A54] flex items-center justify-around mt-5">
                <svg
                  className="w-5 h-5 text-white fill-current cursor-pointer hover:opacity-80 transition-opacity"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <svg
                  className="w-5 h-5 text-white cursor-pointer hover:opacity-80 transition-opacity"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <svg
                  className="w-5 h-5 text-white fill-current cursor-pointer hover:opacity-80 transition-opacity"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <svg
                  className="w-5 h-5 text-white fill-current cursor-pointer hover:opacity-80 transition-opacity"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col items-center sm:items-start w-full max-w-[267px]">
            <h1 className="text-xl font-bold text-gray-800  sm:text-left w-full">
              Get Free Links
            </h1>
            <div className="mt-5 space-y-3 w-full">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 text-gray-800 items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-[#5FA016] transition-colors duration-200 text-sm sm:text-base"
                  >
                    {item.label}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Recent Blogs */}
          <div className="flex flex-col items-center sm:items-start w-full max-w-[267px]">
            <h1 className="text-xl font-bold text-gray-800  sm:text-left w-full mb-4">
              Recent Blogs
            </h1>
            <div className="space-y-6 w-full">
              {/* Blog 1 */}
              <div className="flex items-center gap-4">
                <img
                  className="w-[60px] sm:w-[72px] h-[40px] sm:h-[48px] rounded-[3.5px] object-cover flex-shrink-0"
                  src={blog}
                  alt="Blog post"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 text-[#021A54] flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                      />
                    </svg>
                    <span className="text-gray-500 font-semibold text-sm">
                      2024 - 06 - 07
                    </span>
                  </div>
                  <h1 className="text-base sm:text-lg font-bold text-gray-800 truncate">
                    Blog title
                  </h1>
                </div>
              </div>

              {/* Blog 2 */}
              <div className="flex items-center gap-4">
                <img
                  className="w-[60px] sm:w-[72px] h-[40px] sm:h-[48px] rounded-[3.5px] object-cover flex-shrink-0"
                  src={blog}
                  alt="Blog post"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 text-[#021A54] flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
                      />
                    </svg>
                    <span className="text-gray-500 font-semibold text-sm">
                      2024 - 06 - 07
                    </span>
                  </div>
                  <h1 className="text-base sm:text-lg font-bold text-gray-800 truncate">
                    Blog title
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col items-center sm:items-start w-full max-w-[267px]">
            <h1 className="text-xl font-bold text-gray-800  sm:text-left w-full mb-4">
              Contact Us
            </h1>
            <div className="space-y-4 w-full">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-2 border-gray-800 rounded-[5px] flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 text-[#021A54]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                </div>
                <span className="text-gray-500 text-sm sm:text-base break-all">
                  + 9000 - 4545677
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border-2 border-gray-800 rounded-[5px] flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <span className="text-gray-500 text-sm sm:text-base break-all">
                  abc123@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-5 text-center">
            <p className="text-gray-600 text-sm sm:text-base">
              Global Minds Consultant 2025 | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
