import React, { Component } from 'react';
import { Grid, Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const divStyle = {backgroundColor: "#66cc99"};

class App extends Component {
  render() {
    return (
        <div style={divStyle}>
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

          <Grid>
            {/* render nested routes */}
            {this.props.children}
          </Grid>

        </div>
    );
  }
}


export default App;
