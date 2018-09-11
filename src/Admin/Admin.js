import React, { Component } from "react";
import Navbar from "../component/Navbar/Navbar";
import axios from "axios";
import ClassName from "../component/Course/ClassName";
import { Link } from 'react-router-dom'
import './Admin.css'

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      classList: []
    };
  }

  //calls list of Classes
  handleClick() {
    axios.get("/api/classes").then(res => {
      console.log(res.data);
      this.setState({ classList: res.data });
    });
  }

  render() {
    // console.log(this.state)
    const mappedClassList = this.state.classList.map((eachCourse, i) => {
      return (
        <ClassName
            trainer={eachCourse.pt}
            description={eachCourse.description}
            id={eachCourse.class_id}
        />
      );
    });

//button onclick renders list of schedule with EDIT button
    return (
      <div>
        <Navbar />
        <button onClick={() => this.handleClick()}>UPDATE TRAINER</button>
        {mappedClassList}
            
        <Link  to='/' className="link_img">
        <img src="https://cnet1.cbsistatic.com/img/hHQ5zbteVrxFiOM6MLiCr-gP3c8=/270x0/2012/02/08/48603fec-fdc2-11e2-8c7c-d4ae52e62bcc/iphone-home-button.png" alt=""/></Link>
      </div>
    );
  }
}
