import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div>

        <button onClick={() => this.props.handleClick("Sunday")}>
          <h3>Click here to check the list available class schedule.</h3>
        </button>
        
      </div>
    );
  }
}
