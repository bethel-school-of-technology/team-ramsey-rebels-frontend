import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Nav = () => (

    <div>

      <Link to="/" className="">Home |</Link>
      <Link to="/newrequest" className="">New Request |</Link>
      <Link to="/myrequests" className="">My Requests |</Link>
      <Link to="/admin" className="">Admin</Link>
        <br />
        <hr />
    </div>
  );
  
  Nav.propTypes = {};
  
  Nav.defaultProps = {};

export default Nav;