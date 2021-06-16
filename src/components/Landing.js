import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Nav from './Nav/Nav';

const Landing = () => (

  <div>
    <Nav />
    <h1>
    Welcome to MechanicNow!
    </h1>
    <h3>
      Find your way to mechanical nirvana with our industry-standard tire changes and lubrication services.
    </h3>
  </div>
);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
