import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import company_logo from '../../images/company_logo.jpg';
import './Dashboard.css';

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
 {/* mini-header-navbar */}
 <nav className="navbar navbar-dark bg-dark" position-fixed>
        <Link to='/' 
            className="navbar-brand">
            <img width='70px' height='65px' src={company_logo}>
            </img>
        </Link>
        
        <h3 className="logo">The Gym</h3>


 {/* Search box */}
        <form className="form-inline">
            <input className="form-control mr-sm-2"
                    type="search" 
                    placeholder="What are you looking for?" 
                    aria-label="Search"
            />
 {/* Search button */}
            <button className="btn btn-outline-success my-2 my-sm-0"
                    type="submit">
                    Search
            </button>
        </form>

    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" onClick={ () => this.login() }>
          <h3>
            Member Login 
          </h3>
        </a>
        {/* {JSON.stringify(this.state.user)} */}
      </li>
    </ul>
 </nav>




  <div className="parallax"></div>

  <h3>Login </h3>
        <div style={{height:'10px', 
          padding:'10px, 20px',
          backgroundImage:'https://i2.wp.com/safeseosolutions.com/wp-content/uploads/2014/05/Fitness-Gym-Cover.png?w=851&ssl=1',
          fontSize:'30px' }}>
        </div>
        
  <h2>to check in to schedule </h2>

  <div className="parallax"></div>


    <footer>
      <div class="footer">
        <div class="container narrow row-fluid">
        <a to='/aboutme' className="nav-link text-light" href="#">  Copyright © 2018,  ♣DJMenace  </a>
        </div>
      </div>
    </footer>


  </div>
      
  )
 }  

}

