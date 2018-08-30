import React, { Component } from 'react'

export default class Header extends Component {
    
  render() {
    return (
      <div className='whitefont'>
        <ul>
            <ul onClick={  () => this.props.handleClick('Sunday')}>Sunday</ul>
            <ul onClick={  () => this.props.handleClick('Monday')}>Monday</ul>
            <ul onClick={  () => this.props.handleClick('Tuesday')}>Tuesday</ul>
            <ul onClick={  () => this.props.handleClick('Wednesday')}>Wednesday</ul>
            <ul onClick={  () => this.props.handleClick('Thursday')}>Thursday</ul>
            <ul onClick={  () => this.props.handleClick('Friday')}>Friday</ul>
            <ul onClick={  () => this.props.handleClick('Saturday')}>Saturday</ul>
        </ul>
      </div>
    )
  }
}
