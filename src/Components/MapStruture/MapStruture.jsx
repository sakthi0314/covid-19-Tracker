import React, { useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import CountryContext from "../../Contexts/CountryContext";
import { showDataOnMap } from "../../Utilities/sortingTableData";
import "./MapStruture.scss";

function MapStruture() {
  const { lat, long, zoom, mapCountries } = useContext(CountryContext);
  return (
    <div className='map'>
      <MapContainer center={[lat, long]} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {showDataOnMap(mapCountries, "cases")}
      </MapContainer>
    </div>
  );
}

export default MapStruture;
