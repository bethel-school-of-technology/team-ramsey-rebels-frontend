import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function tempAlert(){
  alert('temporary alert function');
};

const OwnerSignup = () => (
  <div>
    <form>
      <label>Full Name</label>
      <input type="text" id="name" /><br />
      <label>Business Name</label>
      <input type="text" id="businessName" /><br />
      <label>Phone</label>
      <input type="text" id="phone" /><br />
      <Link to="/ownerdashboard" className="">
       Create my account
       </Link>
    </form>
  </div>
);

OwnerSignup.propTypes = {};

OwnerSignup.defaultProps = {};

export default OwnerSignup;

