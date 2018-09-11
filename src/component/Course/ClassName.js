import React, { Component } from 'react'
import './ClassName.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class className extends Component {
  constructor() {
    super();
    this.state = {
      trainer: "",
      description: ""
    }
  }


  updateTrainer() {
    let body={id: this.props.id,   updatedPT: this.state.trainer}

    axios.put(`/api/classes`, body)
          
  }


  render() {
    console.log(this.state)
    return (
      <div className="align-text">
        <h4> Class : {this.props.description} </h4> 
        {/* <input onChange={(e) => this.setState({description: e.target.value}) } type="text"/> */}

        <h4> Trainer : {this.props.trainer}</h4> 
        <h4> Edit Trainer Name to: <input onChange={(e) => this.setState({trainer: e.target.value}) } type="text" />
        <button onClick={() => this.updateTrainer() }>Change</button>
        </h4>

      </div>
    )
  }
}
