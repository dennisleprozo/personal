import React, { Component } from "react";
import axios from "axios";
import "./Body.css";
// import { Link } from "react-router-dom";

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  //changes Props
  componentDidUpdate(prevProps) {
    if (prevProps.week !== this.props.week) {
      axios.get("/api/time").then(res => {
        console.log(res.data);
        this.setState({ events: res.data });
      });
    }
    
  }

  addToList() {
    this.props.addToList();
    axios.post(`/api/list`);
  }

  addToSchedule(obj) {
    axios.post("api/schedule", obj);
  }

  render() {
    const mappedTime = this.state.events.map((timed, i) => {
      console.log(timed)
      // let flag = false;
      return (
        <div key={i} className="whitefont">
          <ul className="alignclasses">
            <li> {this.props.events}</li>
            <li className="timeColor"> {timed.time} hours : </li>
            <li className="nameColor"> {timed.class_name} </li>
            <li className="descColor"> {timed.description} </li>
            <li className="ptColor"> Trainer: {timed.pt} </li>
          </ul>

            <h4>
          <button id="btn" onClick={() => this.addToSchedule({ time: timed.time_id })}>
            ADD TO SCHEDULE
          </button>
            </h4>
        </div>
      );
    });

    return ( 
      <div className="list">
      
        {mappedTime}

      </div>
    )
  }
}
