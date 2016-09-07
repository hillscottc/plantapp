import React, { Component } from 'react';
import PlantsView from './plants/plants-view'
import './app.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Plant App</h2>
        </div>
        <PlantsView />
      </div>
    );
  }
}

export default App;
