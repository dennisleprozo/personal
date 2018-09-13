import React, { Component } from 'react';
import "./landingPage.css";
import routes from '../../routes';
import { Link } from 'react-router-dom';
import fb from '../../images/fb.png';
import ig from '../../images/ig.png';
import li from '../../images/li.png';
import yt from '../../images/yt.png';
import tw from '../../images/tw.png';
import gh from '../../images/gh.png';

// import g from '../../images/g.png';
// import { Link, Router } from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    return (
    <div>
        <section className="intro">
            <nav>
                <a href="/#" id="menu-icon"></a>
                <ul>
                    <li><a href="#about"   >About.Me</a></li>
                    <li><a href="#org"     >Organizer</a></li>
                    <li><a href="#port"    >Hobbies</a></li>
                    <li><a href="#contact" >Contact.Me</a></li>
                    
                </ul>
            </nav>
            <div className="inner">
                <div className="content">
                    <h1>My Project</h1>
                    <p>my blog.</p>
                </div>
            </div>
        </section>

{/* about page         */}
<div className="clearfix"></div>
    <a name="about"></a>
        <section className="left-col">
            <h2>About</h2>
            <p>This section is all about walkthrough sitemap of the front-end application. </p>
            <p>Let's put a new paragraph to test the responsiveness of this section from mobile to full screen display.</p>
        </section>

        <section className="sidebar">
            <img src="https://images.pexels.com/photos/326559/pexels-photo-326559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
        </section>
<div className="clearfix"></div>







{/* Links to the Gym App */}
<div className="clearfix"></div>
        <a name="org"></a>
        <section className="left-col-org">
        <Link to='/Dashboard'><h2>My Gym Organizer</h2></Link>
            <p>This section takes you to my Gym App.  The Gym app allows you to add classes in your schedule.  You can also edit your existing schedule by deleting and adding a new class.</p>
        </section>






            {/* <section className="one-third-class">
                <a href="/class">
                    <img src="https://images.unsplash.com/photo-1515025617920-e1e674b5033c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa18df38d40873a258a71fa0838c6f08&auto=format&fit=crop&w=1628&q=80"/></a>
            </section> */}

            <section className="one-third-class">
                <a href="/class">
                    <img src="https://images.pexels.com/photos/598631/pexels-photo-598631.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/></a>
            </section>

            <section className="one-third-class">
                <a href="/class">
                    <img src="https://images.pexels.com/photos/270837/pexels-photo-270837.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/></a>
            </section>

            <section className="one-third-class">
                <a href="/class">
                    <img src="https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"/></a>
            </section>
            

{/* Portfolio */}
<div className="clearfix"></div>
        <a name="port"></a>
        <section className="left-col">
            <h2>My Hobbies</h2>
                <p>This section consists of the Author's collection of artworks.  This includes some sports fan pictures, nature loving views and some photos</p>
        </section>
        <section className="sidebar">
            <section className="contact">
                <p> 
                    <br/>Photography 
                    <br/>Paintings
                    <br/>Sketches 
                    <br/>Portraits and 
                    <br/>Tattoos
                </p>
            </section>
        </section>

{/* Contacts */}
<div className="clearfix"></div>
        <a name="contact"></a>
        <section className="parallax">
            <div className="parallax-inner">
            </div>
        </section>

<div className="clearfix"></div>
    <h2>Contact Me</h2>
    <section className="contact">
    <br/>
        <p id="my-id">DENNIS<br/>
            <a href="mailto:dennisvleprozo@gmail.com">me@dmenace.com</a> <br/>
                1-702-424-4242 
        </p>
        <p>
            4242 West Russell Road <br/>
                Las Vegas <br/>
                    Nevada <br/>
                        90210
        </p>
    </section>

<div className="clearfix"></div>
    <footer>
        <ul className="social">
            {/* <li><a href="https://plus.google.com/u/0/111689734529128927950"><img src={g}/></a></li> */}
            <li><a href="https://facebook.com/leprozo"><img src={fb}/></a></li>
            <li><a href="https://www.instagram.com/dennisleprozo/"><img src={ig}/></a></li>
            <li><a href="https://github.com/dennisleprozo"><img src={gh}/></a></li>
            <li><a href="https://www.youtube.com/user/dennisleprozo"><img src={yt}/></a></li>
            {/* <li><a href="https://twitter.com/dennis_leprozo"><img src={tw}/></a></li> */}
            <li><a href="https://www.linkedin.com/in/dennisleprozo/"><img src={li}/></a></li>
        </ul>
    </footer>
    <footer className="second">
        <p>&copy; Copyrighted for personal consumption</p>
    </footer>

        </div>
    )
  }
}
