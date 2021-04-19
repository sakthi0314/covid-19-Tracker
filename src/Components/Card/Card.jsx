import React from "react";
import { CountUp } from "use-count-up";
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
          <p className='card__cases'>
            <CountUp
              isCounting
              end={cases}
              duration={3.2}
              prefix={"+"}
              thousandsSeparator=','
              easing='easeOutCubic'
            />
          </p>
          <p className='card__total'>
            <CountUp
              isCounting
              end={total}
              duration={3.2}
              thousandsSeparator=','
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
