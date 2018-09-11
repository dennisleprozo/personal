import React, { Component } from 'react'
import axios from 'axios';
import './Calendar.css';
import Header from './Header';
import Body from './Body'

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        week: ''
    }
    this.handleClick=this.handleClick.bind(this)
}
  handleClick(day) {
  this.setState({week: day})    
  }

  render() {
  console.log(this.state.week)

    return (
      <div>
        <Header handleClick={this.handleClick} />
        
        <Body week={this.state.week} />
      </div>
    )
  }
}
