import React, { useContext } from "react";
import Card from "../Card/Card";
import { CountryContext } from "../../Contexts/CountryContext";
import "./Stats.scss";

function Stats() {
  const { detail } = useContext(CountryContext);
  return (
    <div className='stats'>
      <Card
        title='Confirmed'
        cases={detail?.todayCases}
        total={detail?.cases}
        color=' rgb(63, 175, 154)'
        icon='fa-virus'
      />
      <Card
        title='Recovered'
        cases={detail?.todayRecovered}
        total={detail?.recovered}
        color='#36a2eb'
        icon='fa-smile-wink'
      />
      <Card
        title='Deaths'
        cases={detail?.todayDeaths}
        total={detail?.deaths}
        color='rgba(255,99,132,1)'
        icon='fa-sad-tear'
      />
    </div>
  );
}

export default Stats;
