import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const MechanicSignup = () => (
  <div>
    <form>
      <label>Full Name</label>
      <input type="text" id="name" /><br />
      <label>Business Name</label>
      <input type="text" id="businessName" /><br />
      <label>Phone</label>
      <input type="text" id="phone" /><br />
      <Link to="/mechanicdashboard" className="">
       Create my account
       </Link>
    </form>
  </div>
);

MechanicSignup.propTypes = {};

MechanicSignup.defaultProps = {};

export default MechanicSignup;
