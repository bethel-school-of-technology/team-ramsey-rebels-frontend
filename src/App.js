import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Landing from './components/Landing';
import NewRequest from './components/Requests/NewRequest';
import RequestDataTest from './components/RequestDataTest';
import MyRequests from './components/Requests/MyRequests';
import Admin from './components/Requests/Admin';
import Success from './components/Requests/Success';
import AllRequestsUpdate from './components/Requests/AllRequestsUpdate';

function App() {
  return (
    <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/newrequest" component={NewRequest} />
      <Route path="/landing" component={Landing} />
      <Route path="/myrequests" component={MyRequests} />
      <Route path="/admin" component={AllRequestsUpdate} />
      <Route path="/success" component={Success} />
      <Route path="/requestdatatest" component={RequestDataTest} />
    </div>
    </Router>
  );
}

export default App;