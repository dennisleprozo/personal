import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Login from './component/Login/Login';

import Classes from './component/Classes/Classes';
import PersonalTrainer from './component/PersonalTrainer/PersonalTrainer';
import Calendar from './component/Calendar/Calendar';

import Career from './component/Career/Career';
import AboutUs from './component/AboutUs/AboutUs';




export default  (
    <Switch>
        
        <Route exact path='/' component={Dashboard}/>
        <Route path='/Login' component = {Login}/>
        
        <Route path='/Classes' component = {Classes}/>
        <Route path='/PersonalTrainer' component = {PersonalTrainer}/>

        <Route path='/Calendar' component = {Calendar}/>
        
        
        <Route path='/Career' component = {Career}/>
        <Route path='/AboutUs' component = {AboutUs}/>
        
    </Switch> 
);
