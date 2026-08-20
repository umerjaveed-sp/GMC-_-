import React from "react";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Events from "./pages/Events";
import RegisterNow from "./components/RegisterNow/RegisterNow";
import Blog from "./pages/Blog";
import BlogPage from "./components/RegisterNow/BlogPage";
import BookingForm from "./components/BookingForm/BookingForm";
import ContactUs from "./components/Contact/ContactUs";

import Services from "./pages/Services";
import Destination from "./pages/Destination";
import CoursesFilter from "./components/Filter/CoursesFilter";
import FilterUniversties from "./components/Filter/FilterUniversties";
import FilterScholarships from "./components/Filter/FilterScholarships";
import IELTs from "./pages/IELTs";
import ScrollToTop from "./components/ScrollToTop";
import Promotion from "./pages/Promotion";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/event" element={<Events />} />
        <Route path="register" element={<RegisterNow />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogPage" element={<BlogPage />} />
        <Route path="/bookingform" element={<BookingForm />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/services/course-filter" element={<CoursesFilter />} />
        <Route path="/services/universties" element={<FilterUniversties />} />
        <Route path="/services/scholarships" element={<FilterScholarships />} />
        <Route path="/services/IELTs" element={<IELTs />} />
        <Route path="/services/promotion" element={<Promotion />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
