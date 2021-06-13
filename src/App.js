import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Landing from './components/Landing';
import OwnerReq from './components/Owner/OwnerReq';
import OwnerNav from './components/Owner/OwnerNav';
import UserType from './components/UserType'
import OwnerDashboard from './components/Owner/OwnerDashboard';
import OwnerSignup from './components/Signup/OwnerSignup';
import MechanicSignup from './components/Mechanic/MechanicNav';
import MechanicDashboard from './components/Mechanic/MechanicDashboard';

function App() {
  return (
    <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/usertype" component={UserType} />
      <Route path="/ownerreq" component={OwnerReq} />
      <Route path="/ownernav" component={OwnerNav} />
      <Route path="/ownerdashboard" component={OwnerDashboard} />
      <Route path="/owner_signup" component={OwnerSignup} />
      <Route path="/mechanicsignup" component={MechanicSignup} />
      <Route path="/mechanic_dashboard" component={MechanicDashboard} />
    </div>
    </Router>
  );
}

export default App;