import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";


const MyMap = () => {
  return (
    <React.Fragment>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </React.Fragment>
  );
}

export default MyMap;
