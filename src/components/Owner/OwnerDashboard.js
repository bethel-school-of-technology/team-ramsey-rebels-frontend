import React from 'react';
import PropTypes from 'prop-types';
import OwnerNav from './OwnerNav';



const OwnerDashboard = () => (
  <div>
    <OwnerNav />
     <div>
      Dashboard will live here.
     </div>
  </div>
);

OwnerDashboard.propTypes = {};

OwnerDashboard.defaultProps = {};

export default OwnerDashboard;
