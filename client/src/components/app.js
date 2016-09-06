import React, { Component } from 'react';
import PlantsView from './plants/plants-view'
import logo from '../logo.svg';
import './app.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Plant App</h2>
        </div>
        <p className="App-intro">
        </p>
        <PlantsView />
      </div>
    );
  }
}

export default App;
