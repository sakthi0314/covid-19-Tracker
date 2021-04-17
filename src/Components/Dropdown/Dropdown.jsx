import React, { useContext, useEffect, useState } from "react";
import axios from "../../Services/axios";
import { CountryContext } from "../../Contexts/CountryContext";
import "./Dropdown.scss";

function Dropdown() {
  const [countries, setCountries] = useState([]);
  const { country, onCountryChange } = useContext(CountryContext);

  // Fetch Countries
  const fetchCountries = async () => {
    const { data } = await axios.get("/countries");
    const countriesInfo = data.map((country) => ({
      name: country.country,
      value: country.countryInfo.iso2,
    }));
    setCountries(countriesInfo);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className='dropdown'>
      <div className='dropdown__container'>
        <select name='countries' value={country} onChange={onCountryChange}>
          <option value='worldwide'>Worldwide</option>
          {countries.map((country, id) => (
            <option value={country.value} key={id}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Dropdown;
