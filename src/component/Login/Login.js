import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Navbar from '../Navbar/Navbar';
import Classes from '../Classes/Classes'

export default class Login extends Component {
  render() {
    return (
      <div>
        <Link to="https://localhost:3005/logout" />
        <Navbar />
        <Link to="/Schedule">Choose classes to add to your schedule.</Link>
        <Classes />
      </div>
    );
  }
}
