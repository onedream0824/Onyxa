import React from "react";
import Appointment from "../components/Appointment";
import ContactLanding from "../components/ContactLanding";
import Message from "../components/Message";
import GoogleMapComponent from "../components/GoogleMapComponent";

const Contact = () => {
  const apiKey = "YOUR_GOOGLE_MAPS_API_KEY";
  return (
    <div className="mt-28">
      <ContactLanding />
      <Message />
      <GoogleMapComponent apiKey={apiKey} />
      <Appointment />
    </div>
  );
};

export default Contact;
