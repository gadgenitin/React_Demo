// IMPORT PACKAGE REFERENCES
import React from "react";
import PropTypes from "prop-types";

const weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

const getDate = (date) => {
  return `${weekday[date.getDay()]} ${date.getDate()}`;
};

const DailyWeatherForecastCard = ({ forecast }) => (
  <div>
    <small>{getDate(forecast.date)}</small>
    <img src={forecast.icon} />
    <div>
      {parseInt(forecast.temperature.maximum)}&deg; &nbsp;
      <small>{parseInt(forecast.temperature.minimum)}&deg;</small>
    </div>

    <div>
      <small>{forecast.condition}</small>
    </div>
  </div>
);

DailyWeatherForecastCard.propTypes = {
  forecast: PropTypes.object.isRequired
};

export { DailyWeatherForecastCard };
