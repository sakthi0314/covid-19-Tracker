import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "./MapStruture.scss";

function MapStruture() {
  const position = [11.1271, 78.6569];

  return (
    <div className='map'>
      <MapContainer center={position} zoom={3} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
      </MapContainer>
    </div>
  );
}

export default MapStruture;
