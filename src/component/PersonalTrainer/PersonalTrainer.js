import React, { Component } from "react";
import { Link } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import "./PersonalTrainer.css";
import Navbar from "../Navbar/Navbar";

export default class PersonalTrainer extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        
        <Calendar />

        <button>
          <Link to='/Schedule'>
            <h3>Check your new list of schedule.</h3>
          </Link>
        </button>
      
      </div>
    );
  }
}
