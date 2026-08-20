import React from "react";
import PromotionHero from "../components/Promotion/PromotionHero";
import SpecialOffer from "../components/Promotion/SpecialOffer";
import HotOffers from "../components/Promotion/HotOffers";
import Reviews from "../components/Home/Reviews";
import Banner from "../components/Promotion/Banner";
import Faqs from "../components/About/Faqs";

const Promotion = () => {
  return (
    <>
      <PromotionHero />
      <SpecialOffer />
      <HotOffers />
      <Reviews />
      <Banner />
      <Faqs />
    </>
  );
};

export default Promotion;
