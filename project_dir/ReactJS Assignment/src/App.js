import React from "react";
import Assignment2 from "./Assignment/Assignment2";
import "./styles.css";
import "./Assignment/MyStyle.css";
import "./Assignment/WeatherAssignment/weather.css";
import "./Assignment/WeatherDashbord/styles/header.css";
import Hello from "./Assignment/Hello";
import Assignment3 from "./Assignment/Assignment3";

import Assignment4 from "./Assignment/Assignment4";
import Assignment5 from "./Assignment/Assignment5";
import Assignment6 from "./Assignment/Assignment6";
import Header from "./Assignment/WeatherAssignment/Header";
import Dashbord from "./Assignment/WeatherAssignment/Dashbord";
import MainDash from "./Assignment/WeatherDashbord/components/MainDash";
import GeolocationService from "./Assignment/GeolocationService";
import { Mycurrentlocation } from "./Assignment/Mycurrentlocation";

export default function App() {
  return (
    <div className="App">
      {/* <Hello /> */}
      {/*<Assignment2 />*/}
      {/* <Assignment3 />*/}
      {/*<Assignment4 />*/}
      {/*<Assignment5 title="Digital Clock" />*/}
      {/*<Assignment6 />*/}
      {/*<Header />*/}
      <MainDash />
      {/*<Dashbord />*/}
      {/*<Mycurrentlocation />
      <GeolocationService /> */}
    </div>
  );
}
