// IMPORT PACKAGE REFERENCES
import React from "react";
import PropTypes from "prop-types";

const getTime = (date) => {
  return `${date.getHours()}:00`;
};

const HourlyWeatherForecastCard = ({ forecast }) => (
  <div>
    <small>{getTime(forecast.date)}</small>
    <img src={forecast.icon} />
    <div>{parseInt(forecast.temperature.current)}&deg;</div>
    <div>
      <small>{forecast.condition}</small>
    </div>
  </div>
);

HourlyWeatherForecastCard.propTypes = {
  forecast: PropTypes.object.isRequired
};

export { HourlyWeatherForecastCard };
