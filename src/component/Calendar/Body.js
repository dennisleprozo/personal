import React, { Component } from 'react';
import axios from 'axios'

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  }
   //changes Props 
    componentDidUpdate(prevProps) {
      if (prevProps.week !== this.props.week) {
        axios.get('/api/time')
            .then(res =>  {
              console.log(res.data)
              this.setState({events: res.data })
            })
      }
    }
  
  render() {
    // const mappedTime
    return (
      <div className='whitefont'>
         <ul>
           <li>
             { this.props.week  }
           </li>
         </ul>
      </div>
    )
  }
}
