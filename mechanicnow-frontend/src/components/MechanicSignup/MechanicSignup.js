import React from 'react';
import PropTypes from 'prop-types';

function tempAlert(){
  alert('temporary alert function');
};

const MechanicSignup = () => (
  <div>
    <form>
      <label>Full Name</label>
      <input type="text" id="name" /><br />
      <label>Business Name</label>
      <input type="text" id="businessName" /><br />
      <label>Phone</label>
      <input type="text" id="phone" /><br />
      <button onClick={tempAlert}>Submit</button>
    </form>
  </div>
);

MechanicSignup.propTypes = {};

MechanicSignup.defaultProps = {};

export default MechanicSignup;
