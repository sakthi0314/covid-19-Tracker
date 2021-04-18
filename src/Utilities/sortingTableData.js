import { Popup, Circle } from "react-leaflet";
import numeral from "numeral";

export const sortData = (data) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

const casesTypeColors = {
  casesTypes: {
    hex: "#cc1034",
    multiplier: 800,
  },
  recoverd: {
    hex: "#7dd71d",
    multiplier: 1200,
  },
  cases: {
    hex: "#fb4443",
    multiplier: 2000,
  },
};

// Drawing circle
export const showDataOnMap = (data, casesType = "cases") => {
  return data.map((country, id) => {
    return (
      <Circle
        key={id}
        center={[country.countryInfo.lat, country.countryInfo.long]}
        fillColor={casesTypeColors.casesTypes.hex}
        color={casesTypeColors.casesTypes.hex}
        fillOpacity={0.4}
        radius={
          Math.sqrt(country[casesType]) * casesTypeColors.casesTypes.multiplier
        }
      >
        <Popup>
          <div className='info'>
            <div
              className='info__flag'
              style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
            />
            <div className='info__name'>{country.country}</div>
            <div className='info__cases'>
              Cases: {numeral(country.cases).format("0,0")}
            </div>
            <div className='info__recover'>
              Recovred: {numeral(country.recovered).format("0,0")}
            </div>
            <div className='info__death'>
              Deaths: {numeral(country.deaths).format("0,0")}
            </div>
          </div>
        </Popup>
      </Circle>
    );
  });
};
