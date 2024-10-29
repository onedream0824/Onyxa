import React from "react";
import Review from "../components/Review";
import Appointment from "../components/Appointment";
import AboutMain from "../components/AboutMain";
import AboutIntroduction from "../components/AboutIntroduction";
import Ask from "../components/Ask";

const About = () => {
  return (
    <div className="mt-28">
      <AboutMain />
      <AboutIntroduction />
      <Ask />
      <Review />
      <Appointment />
    </div>
  );
};

export default About;
