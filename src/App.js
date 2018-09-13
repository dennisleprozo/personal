import React, { Component } from 'react';
import './App.css';
import routes from './routes';
// import LandingPage from './component/Landing/LandingPage'
// import Dashboard from './component/Dashboard/Dashboard'


class App extends Component {
  render() {
    return (
      <div>
      
        {routes}
        
      </div>
    );
  }
}

export default App;
