import React from "react";
<<<<<<< HEAD
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
=======
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
const Navigation = () => (
  <div>
    <Nav fill variant="tabs">
      <Nav.Item>
        <Nav.Link href="/" className="nav">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about" className="nav">
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/newrequest" className="nav">
          Service
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/admin" className="nav">
          Admin
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <br />
    <hr />
>>>>>>> main
  </div>
);

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
