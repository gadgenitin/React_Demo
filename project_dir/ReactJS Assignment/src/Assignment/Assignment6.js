import React, { Component } from "react";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";

class Assignment6 extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <NavLink to="/" exact activeStyle={{ backgroundColor: "4caf50" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Project"
                exact
                activeStyle={{ backgroundColor: "4caf50" }}
              >
                Project
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Service"
                exact
                activeStyle={{ backgroundColor: "4caf50" }}
              >
                Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ContactUs"
                exact
                activeStyle={{ backgroundColor: "4caf50" }}
              >
                ContactUs
              </NavLink>
            </li>
          </ul>
          <Route
            path="/"
            exact
            render={() => {
              return (
                <h1>
                  You chose <span className="backbut">Home</span>
                </h1>
              );
            }}
          />
          <Route
            path="/Project"
            exact
            render={() => {
              return (
                <h1>
                  You chose <span className="backbut">Project</span>
                </h1>
              );
            }}
          />
          <Route
            path="/Service"
            exact
            render={() => {
              return (
                <h1>
                  You chose <span className="backbut">Service</span>
                </h1>
              );
            }}
          />
          <Route
            path="/ContactUs"
            exact
            render={() => {
              return (
                <h1>
                  You chose <span className="backbut">ContactUs</span>
                </h1>
              );
            }}
          />
        </div>
      </Router>
    );
  }
}
export default Assignment6;
