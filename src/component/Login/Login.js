import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard'

export default class Login extends Component {
  render() {
    return (
      <div>
        <Dashboard />
 
        List of Classes
        <br/>


      
        <Link to='https://localhost:4000/logout'></Link>
        <Link to='/#/'>Back</Link>

      </div>
    )
  }
}
