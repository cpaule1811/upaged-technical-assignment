import React from "react";
import star from "../icons/star.svg";
import day from "../icons/daytime.svg";
import night from "../icons/nighttime.svg";
import afternoon from "../icons/sundown.svg";
import "../styles/ShiftCard.css";

function ShiftCard({
  hospitalName,
  address,
  shiftStart,
  shiftEnd,
  hourlyPay,
  type,
  period,
  date,
  invited,
  index,
}) {
  const { number, state, postcode, city, street } = address;

  // returns className for color strip should be
  const colorStrip = (invited) => {
    return invited ? "colored-strip-teal" : "colored-strip-blue";
  };

  const isFirst = (index) => {
    return index === 0 ? " first" : "";
  };

  //returns img element depending on what time period the shift is at
  const getIcon = () => {
    switch (period) {
      case "morning":
        return <img src={day} alt="day" />;
      case "afternoon":
        return <img src={afternoon} alt="afternoon" />;
      case "night":
        return <img src={night} alt="night" />;
      default:
        return null;
    }
  };

  return (
    <div className="shift-card-container">
      <div className="shift-card-left">
        <div className={colorStrip(invited) + isFirst(index)} />
        <div className="date-icon-wrapper">
          <div className="date">{date}</div>
          {!invited && getIcon()}
        </div>
        <div className="card-content">
          {shiftStart} - {shiftEnd}
        </div>
        <div className="card-content">{type}</div>
        <div className="rate">${hourlyPay}/hr</div>
      </div>
      <div className={"shift-card-right" + isFirst(index)}>
        <div className="inner-shift-card-right">
          <div className="right-content-wapper">
            <div>{hospitalName}</div>
            <div className="star-wrapper">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <div className="card-content">
              {number} {street}
            </div>
            <div className="card-content">
              {postcode} {state}, {city}
            </div>
          </div>
          <div className="button-wrapper">
            {invited && <button>DECLINE</button>}
            <button>APPLY</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShiftCard;
