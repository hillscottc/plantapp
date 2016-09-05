import React, { Component } from 'react';
import PlantsView from './plants/plants-view'
import LikeButton from './like-button'
import Button from './button'
import logo from '../logo.svg';
import './app.css';


class App extends Component {

  buttonClick(value) {
    console.log("Clicked " + value);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Plant App</h2>
        </div>
        <p className="App-intro">
        </p>
        <div>
          <Button value='Clicking me writes to console.' onClick={this.buttonClick()}/>
          <br/><br/>
        </div>
        <LikeButton />
        <PlantsView />
      </div>
    );
  }
}

export default App;
