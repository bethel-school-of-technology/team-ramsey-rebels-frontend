import React from "react";
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
  </div>
);

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
