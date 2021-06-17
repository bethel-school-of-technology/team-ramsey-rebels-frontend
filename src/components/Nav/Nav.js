import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

const Nav = () => (
  <div>
    <Navbar bg="light">
      <Link to="/" className="nav">
        Home 
      </Link> |
      <Link to="/about" className="nav">
        About 
      </Link> |
      <Link to="/newrequest" className="nav">
        Service
      </Link> |
      <Link to="/admin" className="nav">
        Admin
      </Link>
      <br />
      <hr />
    </Navbar>
  </div>
);

Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;
