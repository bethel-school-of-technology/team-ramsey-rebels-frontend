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
import MechanicSignup from './components/Signup/MechanicSignup';
import MechanicDashboard from './components/Mechanic/MechanicDashboard';
import OwnerSignup from './components/Signup/OwnerSignup';
import MechanicDataTest from './components/MechanicDataTest'


function App() {
  return (
    <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/usertype" component={UserType} />
      <Route path="/ownerreq" component={OwnerReq} />
      <Route path="/ownernav" component={OwnerNav} />
      <Route path="/ownerdashboard" component={OwnerDashboard} />
      <Route path="/mechanicsignup" component={MechanicSignup} />
      <Route path="/mechanicdashboard" component={MechanicDashboard} />
      <Route path="/ownersignup" component={OwnerSignup} />
      <Route path="/mechanicdatatest" component={MechanicDataTest} />
    </div>
    </Router>
  );
}

export default App;