import React from "react";
import PropTypes from "prop-types";

const getUpdateTime = (date) => {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padEnd(2, "0");
  return `${hours}:${minutes}`;
};

const CurrentWeatherDisplay = (props) => {
  const { weather } = props;

  return (
    <div style={{ position: "relative" }}>
      <div>{weather.location.name}</div>
      <div>
        {weather.temperature.maximum}&deg; | {weather.temperature.minimum}&deg;
      </div>
      <div>
        <span>
          {parseInt(weather.temperature.current)} &deg;&nbsp;<sup>c</sup>
        </span>
      </div>
      <div>
        <img src={weather.icon} />
        <span>{weather.condition}</span>
      </div>
      <div>Updated as of {getUpdateTime(weather.date)}</div>
      <i class="material-icons" onClick={props.onRefresh}>
        update
      </i>
    </div>
  );
};

CurrentWeatherDisplay.propTypes = {
  onRefresh: PropTypes.func.isRequired,
  weather: PropTypes.object.isRequired
};

export { CurrentWeatherDisplay };
