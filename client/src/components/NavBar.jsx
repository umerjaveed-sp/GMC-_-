import React, { useState } from "react";
import logo from "../assets/home/logo1.png";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileDestDropdownOpen, setMobileDestDropdownOpen] = useState(false);

  const dropDown = () => {
    setOpen(!open);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close dropdowns when closing mobile menu
    if (mobileMenuOpen) {
      setMobileDropdownOpen(false);
      setMobileDestDropdownOpen(false);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
    setMobileDestDropdownOpen(false);
  };

  return (
    <>
      <nav className="w-full h-[72px] lg:px-20 md:h-[96px] bg-white text-black flex justify-between md:justify-between items-center fixed top-0 z-50 px-4 md:px-[32px]  shadow-sm">
        {/* Logo */}
        <div
          className="w-[80px] md:w-[102.79px] h-[40px] md:h-[48px] object-cover cursor-pointer flex-shrink-0"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-10">
          <ul className="flex items-center justify-center gap-8 xl:gap-12 font-semibold">
            <Link
              to={"/about"}
              className="hover:text-[rgba(116,191,26,1)] transition-colors"
            >
              <li>About Us</li>
            </Link>

            <Link
              to={"/event"}
              className="hover:text-[rgba(116,191,26,1)] transition-colors"
            >
              <li>Events</li>
            </Link>

            <Link
              to={"/blog"}
              className="hover:text-[rgba(116,191,26,1)] transition-colors"
            >
              <li>Blog</li>
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <div className="flex gap-2 items-center justify-center">
                <Link
                  to={"/services"}
                  className="hover:text-[rgba(116,191,26,1)] transition-colors"
                >
                  <li>Services</li>
                </Link>
                <div onMouseEnter={dropDown} className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`size-4 mt-1 font-semibold transition-transform duration-200 ${
                      open ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              {/* Dropdown menu */}
              {open && (
                <div
                  onMouseLeave={dropDown}
                  className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 z-50 border border-gray-100"
                >
                  <ul>
                    <li
                      className="px-5 py-3 text-sm text-gray-800 hover:text-[rgba(116,191,26,1)] hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => {
                        navigate("/services/course-filter");
                        setOpen(false);
                      }}
                    >
                      Courses
                    </li>
                    <li
                      className="px-5 py-3 text-sm text-gray-800 hover:text-[rgba(116,191,26,1)] hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => {
                        navigate("/services/universties");
                        setOpen(false);
                      }}
                    >
                      Universities
                    </li>
                    <li
                      className="px-5 py-3 text-sm text-gray-800 hover:text-[rgba(116,191,26,1)] hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => {
                        navigate("/services/scholarships");
                        setOpen(false);
                      }}
                    >
                      Scholarships
                    </li>
                    <li
                      className="px-5 py-3 text-sm text-gray-800 hover:text-[rgba(116,191,26,1)] hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => {
                        navigate("/services/IELTs");
                        setOpen(false);
                      }}
                    >
                      IELTs
                    </li>
                    <li
                      className="px-5 py-3 text-sm text-gray-800 hover:text-[rgba(116,191,26,1)] hover:bg-gray-50 cursor-pointer transition-colors"
                      onClick={() => {
                        navigate("/services/promotion");
                        setOpen(false);
                      }}
                    >
                      Promotion
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Study Destination */}
            <div className="flex gap-2 items-center justify-center relative">
              <Link
                to={"/destinations"}
                className="hover:text-[rgba(116,191,26,1)] transition-colors"
              >
                <li>Study Destination</li>
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 mt-1 font-semibold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </ul>
        </div>

        {/* Book Consultation Button - Hidden on md, visible on lg */}
        <div
          className="hidden lg:flex flex-row items-center justify-center px-3 py-2 gap-2 rounded-lg bg-[rgba(116,191,26,1)] font-medium text-white hover:bg-[#5FA016] transition-all duration-200 cursor-pointer flex-shrink-0 text-sm lg:text-base"
          onClick={() => navigate("/bookingform")}
        >
          <button className="whitespace-nowrap">Book free counselling</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 lg:size-6 flex-shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col gap-1.5 p-2 hover:bg-gray-50 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMobileMenu}
        ></div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-[72px] md:top-[96px] left-0 right-0 bg-white shadow-xl z-40 transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col p-6 space-y-4 max-h-[calc(100vh-72px)] overflow-y-auto">
            <Link
              to="/about"
              className="py-2 text-gray-800 hover:text-[rgba(116,191,26,1)] font-medium border-b border-gray-100 transition-colors"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link
              to="/event"
              className="py-2 text-gray-800 hover:text-[rgba(116,191,26,1)] font-medium border-b border-gray-100 transition-colors"
              onClick={closeMobileMenu}
            >
              Events
            </Link>
            <Link
              to="/blog"
              className="py-2 text-gray-800 hover:text-[rgba(116,191,26,1)] font-medium border-b border-gray-100 transition-colors"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>

            {/* Mobile Services Dropdown */}
            <div className="border-b border-gray-100">
              <div
                className="flex justify-between items-center py-2 cursor-pointer"
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                <Link
                  to="/services"
                  className="text-gray-800 hover:text-[rgba(116,191,26,1)] font-medium transition-colors"
                  onClick={(e) => {
                    if (mobileDropdownOpen) {
                      e.preventDefault();
                    }
                  }}
                >
                  Services
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`size-5 transition-transform duration-200 ${
                    mobileDropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              {mobileDropdownOpen && (
                <div className="ml-4 space-y-2 pb-2">
                  <Link
                    to="/services/course-filter"
                    className="block py-2 px-3 text-sm text-gray-600 hover:text-[rgba(116,191,26,1)] hover:bg-gray-50 rounded transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Courses
                  </Link>
                  <Link
                    to="/services/universties"
                    className="block py-2 px-3 text-sm text-gray-600 hover:text-[rgba(116,191,26,1)] hover:bg-gray-50 rounded transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Universities
                  </Link>
                  <Link
                    to="/services/scholarships"
                    className="block py-2 px-3 text-sm text-gray-600 hover:text-[rgba(116,191,26,1)] hover:bg-gray-50 rounded transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Scholarships
                  </Link>
                  <Link
                    to="/services/IELTs"
                    className="block py-2 px-3 text-sm text-gray-600 hover:text-[rgba(116,191,26,1)] hover:bg-gray-50 rounded transition-colors"
                    onClick={closeMobileMenu}
                  >
                    IELTs
                  </Link>
                  <Link
                    to="/services/promotion"
                    className="block py-2 px-3 text-sm text-gray-600 hover:text-[rgba(116,191,26,1)] hover:bg-gray-50 rounded transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Promotion
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Study Destination */}
            <div className="border-b border-gray-100">
              <div
                className="flex justify-between items-center py-2 cursor-pointer"
                onClick={() =>
                  setMobileDestDropdownOpen(!mobileDestDropdownOpen)
                }
              >
                <Link
                  to="/destinations"
                  className="text-gray-800 hover:text-[rgba(116,191,26,1)] font-medium transition-colors"
                  onClick={(e) => {
                    if (mobileDestDropdownOpen) {
                      e.preventDefault();
                    }
                  }}
                >
                  Study Destination
                </Link>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`size-5 transition-transform duration-200 ${
                    mobileDestDropdownOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
              {mobileDestDropdownOpen && (
                <div className="ml-4 space-y-2 pb-2">
                  <Link
                    to="/destinations"
                    className="block py-2 px-3 text-sm text-gray-600 hover:text-[rgba(116,191,26,1)] hover:bg-gray-50 rounded transition-colors"
                    onClick={closeMobileMenu}
                  >
                    UK
                  </Link>
                  <Link
                    to="/destinations"
                    className="block py-2 px-3 text-sm text-gray-600 hover:text-[rgba(116,191,26,1)] hover:bg-gray-50 rounded transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Australia
                  </Link>
                  <Link
                    to="/destinations"
                    className="block py-2 px-3 text-sm text-gray-600 hover:text-[rgba(116,191,26,1)] hover:bg-gray-50 rounded transition-colors"
                    onClick={closeMobileMenu}
                  >
                    Canada
                  </Link>
                  <Link
                    to="/destinations"
                    className="block py-2 px-3 text-sm text-gray-600 hover:text-[rgba(116,191,26,1)] hover:bg-gray-50 rounded transition-colors"
                    onClick={closeMobileMenu}
                  >
                    USA
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Book Consultation Button */}
            <div
              className="flex items-center justify-center w-full py-3 px-4 gap-2 rounded-lg bg-[rgba(116,191,26,1)] font-medium text-white hover:bg-[#5FA016] transition-all duration-200 cursor-pointer mt-4"
              onClick={() => {
                navigate("/bookingform");
                closeMobileMenu();
              }}
            >
              <button>Book free counselling</button>
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
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
