import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.712776,
  lng: -74.005974,
};

const GoogleMapComponent = ({ apiKey }) => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        className="rounded-xl shadow-lg overflow-hidden" // TailwindCSS classes
      >
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(GoogleMapComponent);
