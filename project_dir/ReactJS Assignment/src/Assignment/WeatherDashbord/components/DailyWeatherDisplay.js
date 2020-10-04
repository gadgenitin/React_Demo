// IMPORT PACKAGE REFERENCES
import React, { Component } from "react";
import PropTypes from "prop-types";
import OwlCarousel from "react-owl-carousel2";

// IMPORT PROJECT REFERENCES
import { DailyWeatherForecastCard } from "./DailyWeatherForecastCard";

class DailyWeatherDisplay extends Component {
  render() {
    return (
      <div>
        <div>Daily</div>
        <div>
          <div>
            {this.props.dailyForecasts.map((fc, i) => (
              <DailyWeatherForecastCard forecast={fc} key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

DailyWeatherDisplay.propTypes = {
  dailyForecasts: PropTypes.array.isRequired
};

export { DailyWeatherDisplay };
