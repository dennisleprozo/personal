import React, { Component } from "react";
import './Navbar.css';


export default class Navbar extends Component {
    render() {
    return (
      <div>
        <section className="intro">
            <nav>
                <a href="/#" id="menu-icon"></a>
                <ul>
                    <li><a href="#home"    >Home</a></li>
                    <li><a href="#about"   >About</a></li>
                    <li><a href="#classes" >Class</a></li>
                    <li><a href="#schedule">Schedule</a></li>
                    <li><a href="#admin"   >Administrator</a></li>
                </ul>
            </nav>

          <div className="inner">
            <div className="content">
                <h1>Gym App</h1>
                  <p>my scheduler.</p>
                </div>
            </div>
        </section>















      </div>
    );
  }
}
