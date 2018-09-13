import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Login from './component/Login/Login';
import Classes from './component/Classes/Classes';
import PersonalTrainer from './component/PersonalTrainer/PersonalTrainer';
import Calendar from './component/Calendar/Calendar';
import Schedule from './component/Schedule/Schedule';
import Navbar from './component/Navbar/Navbar';
import Admin from './Admin/Admin';

import LandingPage from './component/Landing/LandingPage';

export default  (
    <Switch>
        <Route exact path='/' component={LandingPage}/>


        <Route path='/navbar' component={Navbar}/>
        <Route path='/Dashboard' component = {Dashboard}/>
        
        <Route path='/Login' component = {Login}/>
        
        <Route path='/Classes' component = {Classes}/>
        <Route path='/PersonalTrainer' component = {PersonalTrainer}/>

        <Route path='/Calendar' component = {Calendar}/>
        <Route path='/Schedule' component = {Schedule}/>
        <Route path='/Admin' component = {Admin}/>

    </Switch> 
);
