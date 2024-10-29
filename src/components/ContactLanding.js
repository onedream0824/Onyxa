import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import ContactLandingImage from "../assets/contact.jpg";

const ContactLanding = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-gray-800 to-gray-900 text-white p-10">
      <div className="w-full md:w-6/12 p-5">
        <img
          src={ContactLandingImage}
          alt="Contact Us"
          className="rounded-lg shadow-lg animate-fadeInUp"
        />
      </div>
      <div className="w-full md:w-6/12 p-5">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-2">
          Visit us in Vaughan at Creditstone and Rutherford, just east of
          Vaughan Mills Mall! Book your appointment now using our online
          reservation tool, or reach out to us—we're here to help!
        </p>

        <div className="mt-10">
          <h2 className="font-bold text-xl mb-2">Where Are We?</h2>
          <p className="text-base">Showroom Location:</p>
          <p className="text-base">1701 Creditstone Rd.</p>
          <p className="text-base">Concord, ON, L4K 5V6</p>
        </div>

        <div className="mt-4">
          <h2 className="font-bold text-xl mb-2">Reach Out</h2>
          <p className="text-base">Phone: +1 (905) 326-4314</p>
          <p className="text-base">Email: orderdesk@onyxa.ca</p>
        </div>

        <div className="mt-4">
          <h2 className="font-bold text-xl mb-2">Showroom Hours</h2>
          <p className="text-base">Monday - Friday: 8 AM - 6 PM</p>
          <p className="text-base">
            Saturday: 10 AM - 3 PM (After 3 PM by Appointment Only)
          </p>
        </div>

        <div className="flex space-x-4 my-6">
          <Facebook className="w-6 h-6 hover:text-blue-600 transition duration-300" />
          <Instagram className="w-6 h-6 hover:text-pink-600 transition duration-300" />
          <Linkedin className="w-6 h-6 hover:text-blue-700 transition duration-300" />
        </div>

        <button className="bg-gray-300 text-black font-bold text-sm py-2 px-5 rounded hover:bg-gray-400 transition duration-300">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default ContactLanding;
