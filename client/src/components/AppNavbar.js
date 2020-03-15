import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">National Croquet League</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://en.wikipedia.org/wiki/Croquet">
                    Croquet Info
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://en.wikipedia.org/wiki/Croquet">
                    Tournament Registration
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://en.wikipedia.org/wiki/Croquet">
                    League Champions
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://en.wikipedia.org/wiki/Croquet">
                    Season Schedule
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
