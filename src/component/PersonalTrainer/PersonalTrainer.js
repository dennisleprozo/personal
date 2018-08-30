import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Calendar from '../Calendar/Calendar'

export default class PersonalTrainer extends Component {
  render() {
    return (
      <div>
        <Dashboard />
        <h4 className='whitefont'> Log in to view available Personal Trainer.</h4> 
        <br/>
        <Calendar />








        <Link to='/#/'>Back</Link>

      </div>
    )
  }
}
