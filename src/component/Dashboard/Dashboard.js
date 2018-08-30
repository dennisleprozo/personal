import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import company_logo from '../../images/company_logo.jpg'


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
      <nav className="navbar navbar-dark bg-dark">
        <Link to='/' className="navbar-brand"><img width='68px' height='75px' src={company_logo}></img></Link>
        

 {/* What are you looking for? */}
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
        <a className="nav-link" onClick={ () => this.login() }>Member Login </a>
        {/* {JSON.stringify(this.state.user)} */}
      </li>

    </ul>

  </nav>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  {/* <a className="navbar-brand" href="#">Navbar w/ text</a> */}
  
  <button className="navbar-toggler" 
          type="button"   
          data-toggle="collapse" 
          data-target="#navbarText" 
          aria-controls="navbarText" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">


    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link to='classes' className="nav-link" href="#">   CLASSES <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link to='personaltrainer' className="nav-link" href="#">PERSONAL TRAINER   </Link>
      </li>
      <li className="nav-item">
        <Link to='aboutus' className="nav-link" href="#">  ABOUT US  </Link>
      </li>
    </ul>
    <span className="navbar-text">
      {/* Navbar text with an inline element */}
    </span>
  </div>
 </nav>

<footer>
    <div class="footer">
       <div class="container narrow row-fluid">
        <a to='career' className="nav-link text-light" href="#">  CAREER  </a>
        </div>

    </div>
</footer>


</div>
      



          
)
}  

}

