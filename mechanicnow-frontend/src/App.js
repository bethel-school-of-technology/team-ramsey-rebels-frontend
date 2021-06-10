import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Landing from './components/Landing/Landing';
import OwnerReq from './components/OwnerReq';
import OwnerNav from './components/OwnerNav';
import Who from './components/Signup/Who'
import OwnerDashboard from './components/OwnerDashboard/OwnerDashboard';
import MechanicSignup from './components/MechanicSignup/MechanicSignup';

function App() {
  return (
    <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/who" component={Who} />
      <Route path="/ownerreq" component={OwnerReq} />
      <Route path="/ownernav" component={OwnerNav} />
      <Route path="/ownerdashboard" component={OwnerDashboard} />
      <Route path="/mechanicsignup" component={MechanicSignup} />
    </div>
    </Router>
  );
}

export default App;