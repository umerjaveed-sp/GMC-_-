import React from "react";
import Hero from "../components/Destinations/Hero";
import CountryCards from "../components/Destinations/CountryCards";
import HelpingYou from "../components/Destinations/HelpingYou";
import DestinationServices from "../components/Destinations/DestinationServices";
import KeyFactors from "../components/Destinations/KeyFactors";
import DestinationFaqs from "../components/Destinations/DestinationFaqs";

const Destination = () => {
  return (
    <>
      <Hero />
      <CountryCards />
      <HelpingYou />
      <DestinationServices />
      <KeyFactors />
      <DestinationFaqs />
    </>
  );
};

export default Destination;
