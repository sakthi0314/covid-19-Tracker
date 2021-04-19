import React, { useContext } from "react";
import CountryContext from "../../Contexts/CountryContext";
import { sortData } from "../../Utilities/sortingTableData";
import numeral from "numeral";
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
              <strong>{numeral(cases).format("0,0")}</strong>
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

{
  /* <p className='card__total'>{numeral(total).format("0,0")}</p> */
}
