import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { VscTools, VscAccount, VscHome } from "react-icons/vsc";


const Navigation = () => (
  <div className="nav">
    <Navbar collapseOnSelect fixed="top" expand="md" bg="dark" variant="dark">
      <Navbar.Brand variant="primary">
        <VscTools /> MechanicNow
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link href="/">
            Home <VscHome />
          </Nav.Link>
          <Nav.Link href="/newrequest">New Service</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contactus">Contact Us</Nav.Link>
          <Nav.Link href="/admin">
            Admin <VscAccount />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
