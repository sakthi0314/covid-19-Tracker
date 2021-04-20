import React, { useContext } from "react";
import ReactApexChart from "react-apexcharts";
import CountryContext from "../../Contexts/CountryContext";
import "./ChartView.scss";

function ChartView() {
  const { deaths, recovered, dates } = useContext(CountryContext);

  const series = [
    {
      name: "Recovered",
      data: [...recovered],
    },
    {
      name: "Death",
      data: [...deaths],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [...dates],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div className='chartView'>
      <h1 className='chartView__title'>Today statistics</h1>
      <ReactApexChart
        options={options}
        series={series}
        type='area'
        height={350}
      />
    </div>
  );
}

export default ChartView;
