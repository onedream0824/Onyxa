import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%", // Full width
  height: "400px", // Adjust height as needed
};

const center = {
  lat: 40.712776, // Example latitude for New York
  lng: -74.005974, // Example longitude for New York
};

const GoogleMapComponent = ({ apiKey }) => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10} // Adjust zoom level as needed
        className="rounded-xl shadow-lg overflow-hidden" // TailwindCSS classes
      >
        {/* Additional map features like markers can be added here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(GoogleMapComponent);
