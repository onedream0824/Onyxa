import React from "react";
import Banner from "../components/Banner";
import Why from "../components/Why";
import StoneCollection from "../components/StoneCollection";
import Review from "../components/Review";
import PorcelainSlabPreview from "../components/PorcelainSlabPreview";
import Feature from "../components/Feature";
import Appointment from "../components/Appointment";

const Dashboard = () => {
  return (
    <div>
      <Banner />
      <Why />
      <StoneCollection />
      <Review />
      <PorcelainSlabPreview />
      <Feature />
      <Appointment />
    </div>
  );
};

export default Dashboard;
