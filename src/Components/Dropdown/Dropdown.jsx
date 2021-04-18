import React, { useContext, useEffect, useState } from "react";
import axios from "../../Services/axios";
import { CountryContext } from "../../Contexts/CountryContext";
import "./Dropdown.scss";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";

function Dropdown() {
  const [countries, setCountries] = useState([]);
  const { country, onCountryChange } = useContext(CountryContext);
  const { logout } = useAuth();
  const history = useHistory();
  // Fetch Countries
  const fetchCountries = async () => {
    const { data } = await axios.get("/countries");
    const countriesInfo = data.map((country) => ({
      name: country.country,
      value: country.countryInfo.iso2,
    }));
    setCountries(countriesInfo);
  };

  async function handleLogout() {
    await logout();
    history.push("/login");
  }

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
        <button className='navbar__btn' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dropdown;
