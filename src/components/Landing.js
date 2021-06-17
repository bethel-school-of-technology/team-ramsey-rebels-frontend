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
    <img src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80" alt="nicecar"/>
  </div>
);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
