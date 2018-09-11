import React, { Component } from "react";
import { Link } from "react-router-dom";
import company_logo from "../../images/company_logo.jpg";
import Schedule from "../Schedule/Schedule";

export default class Navbar extends Component {
    render() {
    return (
      <div>
        {/* mini-header-navbar */}
        <nav className="navbar navbar-dark bg-dark" position-fixed>
          <Link to="/" className="navbar-brand">
            <img width="70px" height="65px" src={company_logo} alt=""/>
          </Link>

          <h3 className="logo">My Gym Scheduler</h3>

          {/* Search box */}
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="What are you looking for?"
              aria-label="Search"
            />
            {/* Search button */}
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" onClick={() => this.login()}>
                <h3>Member Login</h3>
              </a>
              {/* {JSON.stringify(this.state.user)} */}
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
