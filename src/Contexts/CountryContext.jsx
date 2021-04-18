import React, { createContext, useEffect, useState } from "react";
import axios from "../Services/axios";

export const CountryContext = createContext("worldwide");

export const CountryProvider = (props) => {
  const [country, setCountry] = useState("worldwide");
  const [detail, setDetail] = useState({});
  const [tableData, setTableDate] = useState([]);
  const [lat, setLat] = useState(13.0827);
  const [long, setLong] = useState(80.2707);
  const [mapCountries, setMapCountries] = useState([]);

  useEffect(() => {
    // Fetch Countries data
    const fetchDetails = async () => {
      const url =
        (await country) === "worldwide" ? "/all" : `/countries/${country}`;
      const { data } = await axios.get(url);
      setDetail(data);
    };

    fetchDetails();
  }, [country, lat, long]);

  useEffect(() => {
    const fetchTableData = async () => {
      const { data } = await axios.get("/countries");
      setTableDate(data);
      setMapCountries(data);
    };
    fetchTableData();
  }, []);

  const onCountryChange = (e) => {
    setCountry(e.target.value);
  };

  return (
    <CountryContext.Provider
      value={{
        country: country,
        onCountryChange: onCountryChange,
        detail: detail,
        tableData: tableData,
        lat: lat,
        long: long,
        mapCountries: mapCountries,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
