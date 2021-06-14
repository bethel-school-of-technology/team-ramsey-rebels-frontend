import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const MechanicNav = () => (
  <div class="mechnav">
   <h2>Mechanic Nav</h2> 
    <Link to="/availablejobs">Find new jobs!</Link> <br/> <br/>
    <Link to="/landing">Log out</Link>
    <div></div>
  </div>
  
);

MechanicNav.propTypes = {};

MechanicNav.defaultProps = {};

export default MechanicNav;
