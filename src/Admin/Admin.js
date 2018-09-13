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

        <Navbar/>

          <button onClick={() => this.handleClick()}>
            <h3>UPDATE TRAINER</h3>
          </button>
          
            {mappedClassList}

          <button onClick={() => this.handleClick()}>
            <h3>Check Updated Trainer</h3>
          </button>
        
      </div>
    );
  }
}
