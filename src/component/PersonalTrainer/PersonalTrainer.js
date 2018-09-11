import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Calendar from "../Calendar/Calendar";
import "./PersonalTrainer.css";
import Navbar from '../Navbar/Navbar'

export default class PersonalTrainer extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h4 className="intro" />
        <Calendar />

        <Link to="/Schedule">Next</Link>
      </div>
    );
  }
}
