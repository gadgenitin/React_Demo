// IMPORT PACKAGE REFERENCES
import React, { Component } from "react";
import PropTypes from "prop-types";
import OwlCarousel from "react-owl-carousel2";

// IMPORT PROJECT REFERENCES
import { HourlyWeatherForecastCard } from "./HourlyWeatherForecastCard";

const options = {
  items: 3,
  nav: false,
  rewind: true,
  autoplay: false
};

class HourlyWeatherDisplay extends Component {
  render() {
    return (
      <div>
        <div>Hourly</div>
        <div>
          {!!this.props.hourlyForecasts &&
            this.props.hourlyForecasts.map((fc, i) => (
              <HourlyWeatherForecastCard key={i} forecast={fc} />
            ))}
        </div>
      </div>
    );
  }
}

HourlyWeatherDisplay.propTypes = {
  hourlyForecasts: PropTypes.array.isRequired
};

export { HourlyWeatherDisplay };
