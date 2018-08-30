import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import axios from "axios";

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
       
        <div key={i}>
          <img className="imgClass" src={classed.class_img} alt="image" /> 

          <h4>{classed.class_name}
            </h4>
          <h5>Description: 
            </h5>
          <h6>{classed.description}
            </h6>
        </div>
      );
    });
    
    return (
      <div>
        <Dashboard />
        <h3 className="whitefont">{mappedClasses}</h3>
        <Link to="/#/" className="backlink">Back</Link>
      </div>
    );
  }
}
