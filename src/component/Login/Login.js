import React, { Component } from "react";
import { Link } from "react-router-dom";
import Classes from '../Classes/Classes'

export default class Login extends Component {
  render() {
    return (
      <div>
        
        <Link to={process.env.REACT_APP_LOGOUT}/>


        {/* <Link to="/Schedule">Check previous Schedule.</Link> */}

        <Classes />
      </div>
    );
  }
}
