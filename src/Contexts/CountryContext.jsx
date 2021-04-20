import React, { createContext, useEffect, useState } from "react";
import axios from "../Services/axios";

export const CountryContext = createContext("worldwide");

export const CountryProvider = (props) => {
  const [country, setCountry] = useState("worldwide");
  const [detail, setDetail] = useState({});
  const [tableData, setTableDate] = useState([]);
  const [mapCountries, setMapCountries] = useState([]);
  const [recovered, setRecovered] = useState([]);
  const [dates, setDates] = useState([]);
  const [deaths, setDeaths] = useState([]);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Fetch Countries data
    const fetchDetails = async () => {
      const url =
        (await country) === "worldwide" ? "/all" : `/countries/${country}`;
      const { data } = await axios.get(url);
      setDetail(data);
    };

    fetchDetails();
  }, [country]);

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

  useEffect(() => {
    const getHistory = async () => {
      const { data } = await axios.get(`/historical/all?lastdays=10`);
      setRecovered(Object.values(data.recovered));
      setDates(Object.keys(data.cases));
      setDeaths(Object.values(data.deaths));
    };
    getHistory();
  }, []);

  return (
    <CountryContext.Provider
      value={{
        country: country,
        onCountryChange: onCountryChange,
        detail: detail,
        tableData: tableData,
        mapCountries: mapCountries,
        dates: dates,
        recovered: recovered,
        deaths: deaths,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
