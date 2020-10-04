import React from "react";
import { Header } from "./Header";
import { WeatherDashboard } from "./WeatherDashboard";

const MainDash = () => (
  <div>
    <Header title="Weather" />

    <WeatherDashboard />
  </div>
);

export default MainDash;
