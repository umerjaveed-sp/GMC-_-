import React from "react";
import IELTsHero from "../components/IELTS/IELTsHero";
import MasterNewLanguage from "../components/IELTS/MasterNewLanguage";
import IELTsPrepration from "../components/IELTS/IELTsPrepration";
import LanguageTest from "../components/IELTS/LanguageTest";
import ChooseUsForTestPrepration from "../components/IELTS/ChooseUsForTestPrepration";
import OfferOfTheWeek from "../components/IELTS/OfferOffTheWeek";
import LauguageCourses from "../components/IELTS/LauguageCourses";
import IeltsFaqs from "../components/IELTS/IeltsFaps";

const IELTs = () => {
  return (
    <>
      <IELTsHero />
      <MasterNewLanguage />
      <IELTsPrepration />
      <LanguageTest />
      <ChooseUsForTestPrepration />
      <OfferOfTheWeek />
      <LauguageCourses />
      <IeltsFaqs />
    </>
  );
};

export default IELTs;
