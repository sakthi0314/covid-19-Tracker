import React, { useContext } from "react";
import CountryContext from "../../Contexts/CountryContext";
import { sortData } from "../../Utilities/sortingTableData";
import "./LiveCases.scss";

function LiveCases() {
  const { tableData } = useContext(CountryContext);
  const sortedData = sortData(tableData);
  return (
    <div className='liveCases'>
      <h1 className='liveCases__title'>Live cases By Country</h1>
      {sortedData ? (
        sortedData.map(({ country, cases }, id) => (
          <tr key={id} className='liveCases__row'>
            <td>{country}</td>
            <td>
              <strong>{cases}</strong>
            </td>
          </tr>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default LiveCases;
