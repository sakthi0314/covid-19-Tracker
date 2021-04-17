import React from "react";
import numeral from "numeral";
import "./Card.scss";

function Card({ title, cases, total, color, icon }) {
  return (
    <div className='card'>
      <div className='card__content'>
        <div className='card__icon'>
          <i className={`fas ${icon}`} style={{ color: `${color}` }}></i>
        </div>
        <div className='card__info'>
          <p className='card__title'>{title}</p>
          <p className='card__cases'>+{numeral(cases).format("0,0")}</p>
          <p className='card__total'>{numeral(total).format("0,0")}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
