import React, { Component } from 'react';
import './App.css';
import routes from './routes';
// import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
      
        {routes}
        
      </div>
    );
  }
}

export default App;
