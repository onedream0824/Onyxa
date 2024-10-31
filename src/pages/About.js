import React from "react";
import Review from "../components/Review";
import Appointment from "../components/Appointment";
import AboutMain from "../components/AboutMain";
import AboutIntroduction from "../components/AboutIntroduction";
import Ask from "../components/Ask";

const About = () => {
  return (
    <div className="md:mt-64 lg:mt-28 mt-48">
      <AboutMain />
      <AboutIntroduction />
      <Ask />
      <Review />
      <Appointment />
    </div>
  );
};

export default About;
