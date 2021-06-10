import React from 'react';
import PropTypes from 'prop-types';

  function tempAlert(){
    alert("You just clicked to sign in.");
  };

const Landing = () => (

  <div>
    <div>
    Welcome to MechanicNow
    </div>
    <button onClick={tempAlert}>
      Sign In with Google
    </button>
  </div>
);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
