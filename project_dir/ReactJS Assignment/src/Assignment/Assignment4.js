import React, { Component } from "react";
import KeyPadComponent from "./Component/KeyPadComponent";
import ResultComponent from "./Component/ResultComponent";

class Assignment4 extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    };
  }
  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "") + ""
      });
    } catch (e) {
      this.setState({
        result: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    });
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <ResultComponent result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default Assignment4;
