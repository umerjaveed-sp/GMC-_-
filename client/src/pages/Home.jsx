import React from "react";

import Hero from "../components/Home/Hero";
import Search from "../components/Home/Search";
import WhyGM from "../components/Home/WhyGM";
import Support from "../components/Home/Support";
import PartnerUniversties from "../components/Home/PartnerUniversties";
import Journey from "../components/Home/Journey";
import Fields from "../components/Home/Fields";
import StudyAbroad from "../components/Home/StudyAbroad";
import Form from "../components/Home/Form";
import Reviews from "../components/Home/Reviews";

const Home = () => {
  return (
    <>
      <div className="overflow-x-auto">
        {/* Hero Section  */}
        <Hero />
        {/* search */}
        <Search />
        <WhyGM />
        <Support />
        <PartnerUniversties />
        <Journey />
        <Fields />
        <StudyAbroad />
        <Form />
        <Reviews />
      </div>
    </>
  );
};

export default Home;
