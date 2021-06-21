import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => (
  <div>
    <Navbar bg="light" variant="light">
      <Navbar.Brand variant="primary">MechanicNow</Navbar.Brand>
      <Nav variant="pills" className="mr-auto">
        <Nav.Link href="/landing">Home</Nav.Link>
        <Nav.Link href="/newrequest">New Service</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/contactus">Contact Us</Nav.Link>
      </Nav>
    </Navbar>
  </div>
);

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
