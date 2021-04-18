import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import CountryContext from "../../Contexts/CountryContext";
import "./ChartView.scss";

function ChartView() {
  const { detail } = useContext(CountryContext);

  const data = {
    labels: ["Today Cases", "Today Deaths", "Today Recovered"],
    datasets: [
      {
        label: "Deaths Today",
        data: [detail.todayCases, detail.todayRecovered, detail.todayDeaths],
        backgroundColor: ["rgb(63, 175, 154)", "#36a2eb", "rgba(255,99,132,1)"],
      },
    ],
  };

  const options = {
    title: {
      display: true,
    },
  };

  return (
    <div className='chartView'>
      <h1 className='chartView__title'>Today statistics</h1>
      <Doughnut data={data} options={options} width={30} height={30} />
    </div>
  );
}

export default ChartView;
