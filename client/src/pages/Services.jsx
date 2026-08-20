import React from "react";
import Hero from "../components/Services/Hero";
import ScholarshipAssistant from "../components/Services/ScholarshipAssistant";
import HowitWork from "../components/Services/HowitWork";
import Prepration from "../components/Services/Prepration";
import CareerCounstling from "../components/Services/CareerCounstling";
import Application from "../components/Services/Application";
import OfferCards from "../components/Services/OfferCard";
import Reviews from "../components/Home/Reviews";
import Faqs from "../components/About/Faqs";
import Form from "../components/Services/Form";

const Services = () => {
  return (
    <>
      <Hero />
      <ScholarshipAssistant />
      <HowitWork />
      <Prepration />
      <CareerCounstling />
      <Application />
      <OfferCards />
      <Reviews />
      <Faqs />
      <Form />
    </>
  );
};

export default Services;
