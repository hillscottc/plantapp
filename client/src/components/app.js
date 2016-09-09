import React, { Component } from 'react';
import PlantsView from './plants/plants-view'
import { Grid, Navbar, Jumbotron } from 'react-bootstrap';
// import './app.css';


class App extends Component {
  render() {
    return (
        <div>
          <Navbar inverse fixedTop>
            <Grid>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href="/">Home</a>
                </Navbar.Brand>
                <Navbar.Toggle />
              </Navbar.Header>
            </Grid>
          </Navbar>
          <Jumbotron>
            <Grid>
              <h1>Welcome to PlantApp</h1>
              <PlantsView />
            </Grid>
          </Jumbotron>
        </div>
    );
  }
}


export default App;
