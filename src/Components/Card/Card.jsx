import React from "react";
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
          <p className='card__cases'>+{cases}</p>
          <p className='card__total'>{total}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
