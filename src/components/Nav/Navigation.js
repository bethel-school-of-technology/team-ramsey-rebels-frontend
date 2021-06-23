import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navigation = () => (
  <div>
    <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
      <Container>
        <Navbar.Brand variant="primary">MechanicNow</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav>
          <Nav.Link href="/landing">Home</Nav.Link>
          <Nav.Link href="/newrequest">New Service</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contactus">Contact Us</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
