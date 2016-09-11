import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Grid, Jumbotron, Navbar, Nav, NavItem} from 'react-bootstrap';
// import './app.css';


class App extends Component {
  render() {
    return (
        <div>
          <Navbar inverse fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                  <a href="/">Home</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to="/about">
                  <NavItem eventKey={1}>About</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Jumbotron>
            <Grid>
              <h1>Welcome to PlantApp</h1>
            </Grid>
          </Jumbotron>

          {/* render nested routes */}
          {this.props.children}

        </div>
    );
  }
}


export default App;
