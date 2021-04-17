import React, { createContext, useEffect, useState } from "react";
import axios from "../Services/axios";

export const CountryContext = createContext("worldwide");

export const CountryProvider = (props) => {
  const [country, setCountry] = useState("worldwide");
  const [detail, setDetail] = useState({});
  const [tableData, setTableDate] = useState([]);
  const [mapPosition, setMapPosition] = useState([]);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setMapPosition([position.coords.latitude, position.coords.longitude]);
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    // Fetch Countries data
    const fetchDetails = async () => {
      const url =
        (await country) === "worldwide"
          ? "https://disease.sh/v3/covid-19/all"
          : `https://disease.sh/v3/covid-19/countries/${country}`;
      const { data } = await axios.get(url);
      setDetail(data);
    };

    fetchDetails();
  }, [country]);

  useEffect(() => {
    const fetchTableData = async () => {
      const { data } = await axios.get("/countries");
      setTableDate(data);
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
        mapPosition: mapPosition,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
