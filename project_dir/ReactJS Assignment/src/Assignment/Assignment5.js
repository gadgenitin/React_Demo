import React, { Component } from "react";

class Assignment5 extends Component {
  constructor(props) {
    super(props);
    this.handleDate = this.handleDate.bind(this);
    this.state = {
      hours: "",
      minutes: "",
      seconds: "",
      isChecked: false
    };

    this.handleChecked = this.handleChecked.bind(this);
  }

  componentDidMount() {
    this.clockInterval = setInterval(this.handleDate, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockInterval);
  }
  handleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    const { hours, minutes, seconds } = this.state;
    var curr_date;
    var arrayOfWeekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    var dateObj = new Date();
    var weekdayNumber = dateObj.getDay();
    var weekdayName = arrayOfWeekdays[weekdayNumber];
    var cuDate = dateObj.getDate();
    var curMonth = dateObj.toLocaleString("default", { month: "long" });
    var curYear = dateObj.getFullYear();

    if (this.state.isChecked)
      curr_date = `${weekdayName} ${cuDate} ${curMonth} ${curYear}`;
    else curr_date = "";

    const { title } = this.props;
    return (
      <div>
        <h3 className="H3Div">
          <img
            className="imgClass"
            src="https://techviral.net/wp-content/uploads/2018/11/13.png"
          />
          Digital clock
        </h3>
        <div>
          <label class="switch">
            <input type="checkbox" onChange={this.handleChecked} />
            <span class="slider round"></span>
            <img
              className="CalClass"
              src="https://calendar.umaine.edu/wp-content/uploads/sites/15/2015/08/Calendarview-634x421.png"
            />
          </label>
        </div>
        <div className="timmedotdiv">
          <p
            style={{ padding: "90px", fontSize: "0.6em", marginLeft: "-15px" }}
          >
            {hours}:{minutes}:{seconds} <br />
            <p></p>
            {curr_date}
          </p>
        </div>
      </div>
    );
  }

  handleDate() {
    //const { datediff } = {0};
    const date = new Date();
    date.setHours(date.getHours());
    let hours = this.formatTime(date.getHours());
    let minutes = this.formatTime(date.getMinutes());
    let seconds = this.formatTime(date.getSeconds());
    this.setState({ hours, minutes, seconds });
  }

  formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
}

export default Assignment5;
