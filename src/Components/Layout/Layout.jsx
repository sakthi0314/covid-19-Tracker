import React from "react";
import LiveCases from "../LiveCases/LiveCases";
import Stats from "../Stats/Stats";
import MapStruture from "../MapStruture/MapStruture";
import "./Layout.scss";
import ChartView from "../ChartView/ChartView";

function Layout() {
  return (
    <div className='layout'>
      <div className='layout__container'>
        <div className='one'>
          <div className='cases'>
            <Stats />
          </div>
          <MapStruture />
        </div>
        <div className='two'>
          <ChartView />
          <LiveCases />
        </div>
      </div>
    </div>
  );
}

export default Layout;
