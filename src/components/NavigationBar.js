import React from "react";
import { Link } from "react-router-dom";

import Headroom from "headroom.js";

import {
  // Button,
  // UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  // Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  // Row,
  // Col,
  UncontrolledTooltip
} from "reactstrap";

class NavigationBar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                Student Adaptability
              </NavbarBrand>
              <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                <UncontrolledDropdown nav>
                  <DropdownToggle nav>
                    <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text">Examples</span>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem to="/landing-page" tag={Link}>
                      Landing
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <Nav className="align-items-lg-center ml-lg-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link"
                    id="tooltip1"
                    to="/how-does-it-work"
                    tag={Link}>
                    How does it work?
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip1">
                    Explanation about how the AI works
                  </UncontrolledTooltip>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link"
                    id="tooltip2"
                    to="/prediction"
                    tag={Link}>
                    Prediction
                  </NavLink>
                  <UncontrolledTooltip delay={0} target="tooltip2">
                    Make a prediction
                  </UncontrolledTooltip>
                </NavItem>
              </Nav>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default NavigationBar;
