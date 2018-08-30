import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Abtus from '../AboutUs/Abtus.css';
import abtus from '../../images/abtus_img.jpg'

export default class AboutUs extends Component {
    render() {
        return (
            <div className='body'>
                <Dashboard />
                <img className='bgimage' src={abtus}></img>
                 
                <Link to='/#/'>Back</Link>
            
            </div>
        );
    }
}

