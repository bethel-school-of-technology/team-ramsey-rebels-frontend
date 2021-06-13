import React from 'react';
import PropTypes from 'prop-types';

function tempAlert(){
  alert('temporary alert function');
};

const OwnerSignup = () => (
  <div>
    <form>
      <label>Full Name</label>
      <input type="text" id="name" /><br />
      <label>Make</label>
      <input type="text" id="businessName" /><br />
      <label>Model</label>
      <input type="text" id="phone" /><br />
      <button onClick={tempAlert}>Submit</button>
    </form>
  </div>
);

OwnerSignup.propTypes = {};

OwnerSignup.defaultProps = {};

export default OwnerSignup;