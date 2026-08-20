import React from "react";
import Hero from "../components/Events/Hero";
import UpcomingEvents from "../components/Events/UpcomingEvents";
import PastEvents from "../components/Events/PastEvents";
import LimitedSeats from "../components/Events/LimitedSeats";
import { Routes, Route } from "react-router-dom";
import RegisterNow from "../components/RegisterNow/RegisterNow";

const Events = () => {
  return (
    <>
      <div>
        <Hero />
        <UpcomingEvents />
        <PastEvents />
        <LimitedSeats />
      </div>
    </>
  );
};

export default Events;
