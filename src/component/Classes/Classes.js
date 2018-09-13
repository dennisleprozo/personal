import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Classes.css";
import PersonalTrainer from '../PersonalTrainer/PersonalTrainer';
import Navbar from '../Navbar/Navbar'

export default class Classes extends Component {
  constructor() {
    super();
    this.state = {
      classes: []
    };
  }
  componentDidMount() {
    axios.get("/api/classes").then(response => {
      console.log(response);
      this.setState({
        classes: response.data
      });
    });
  }

  render() {
    const mappedClasses = this.state.classes.map((classed, i) => {
      return (
        <div key={i} id="desc_add">
            <img className="imgClass " src={classed.class_img}alt="image" width="300px" />
            <h4>Class: {classed.class_name} </h4>
            <h5>Description: {classed.description}</h5>
            {/*<h6>Trainer: {classed.pt}</h6> */}
        </div>
      );
    });

    // scrolling alert
    return (
      <div>

        <Navbar/>

        {mappedClasses}
          <Link to="/PersonalTrainer" className="backlink">
            <button>
                <h3>
                  Add favorite class to schedule.
                </h3>
            </button>
        </Link>
      </div>
    );
  }
}
