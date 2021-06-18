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
import Admin from './components/Admin/Admin';
import Success from './components/Requests/Success';
import About from './components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route path="/newrequest" component={NewRequest} />
      <Route path="service" component={NewRequest} />
      <Route path="/landing" component={Landing} />
      <Route path="/admin" component={Admin} />
      <Route path="/success" component={Success} />
      <Route path="/about" component={About} />

    </div>
    </Router>
  );
}

export default App;