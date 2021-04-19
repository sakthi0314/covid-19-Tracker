import React, { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import CountryContext from "../../Contexts/CountryContext";
import { showDataOnMap } from "../../Utilities/sortingTableData";
import "./MapStruture.scss";

function MapStruture() {
  const { mapCountries } = useContext(CountryContext);

  // const [location, setlocation] = useState([13.0711552, 80.2707]);
  let lat = 13.0711552;
  let long = 80.2707;

  useEffect(() => {
    // getRandomNum();
  }, []);

  return (
    <div className='map'>
      <MapContainer center={[lat, long]} zoom={4} scrollWheelZoom={false}>
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
