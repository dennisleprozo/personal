import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="whitefont">
        <ul className="daybar">
            <button onClick={() => this.props.handleClick("Sunday")}>
              Schedule
            </button>
          <h4 className="intro"> Click to view today's schedule. </h4>
        </ul>
      </div>
    );
  }
}
