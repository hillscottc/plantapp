import React, { Component } from 'react';
import PlantsView from './plants/plants-view'
import { Grid, Jumbotron, Navbar, Nav, NavItem} from 'react-bootstrap';
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
              <Navbar.Collapse>
                <Nav>
                  <NavItem eventKey={1} href="#">Link</NavItem>
                </Nav>
              </Navbar.Collapse>
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
