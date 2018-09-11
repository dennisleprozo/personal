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


import Career from './component/Career/Career';
import AboutMe from './component/AboutMe/AboutMe';





export default  (
    <Switch>
        <Route exact path='/navbar' component={Navbar}/>
        
        <Route exact path='/' component={Dashboard}/>
        <Route path='/Login' component = {Login}/>
        
        <Route path='/Classes' component = {Classes}/>
        <Route path='/PersonalTrainer' component = {PersonalTrainer}/>

        <Route path='/Calendar' component = {Calendar}/>
        <Route path='/Schedule' component = {Schedule}/>
        <Route path='/Admin' component = {Admin}/>
        
        <Route path='/Career' component = {Career}/>
        <Route path='/AboutMe' component = {AboutMe}/>

    </Switch> 
);
