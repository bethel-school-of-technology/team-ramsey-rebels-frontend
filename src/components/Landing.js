import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

  function tempAlert(){
    alert("You just clicked to sign in.");
  };

const Landing = () => (

  <div>
    <div>
    Welcome to MechanicNow
    </div>
    <Link to="/usertype" className="">
    Sign In with Google
    </Link>

  </div>
);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
