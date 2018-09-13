import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';
import Navbar from '../Navbar/Navbar';

// Auth0  login
export default class Dashboard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  async componentDidMount() {
    let res = await axios.get('/api/user-data');
    this.setState({
      user: res.data
    })
  };
  login() {
    let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
    let url = `${encodeURIComponent(window.location.origin)}/auth/callback`
    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
  }

render(){
  return(
    <div> 

      <Navbar/>

        <button onClick={ () => this.login() }><h3>Click here to Login with Google or Github</h3>
          </button>

    

  </div>
      
  )
 }  

}

