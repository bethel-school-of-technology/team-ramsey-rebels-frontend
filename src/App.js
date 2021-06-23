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
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';
import AdminSignUp from './components/AdminSignUp/AdminSignUp'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogIn from './components/AdminLogIn/AdminLogIn';

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
      <Route path="/contactus" component={Contact} />
      <Route path="/adminsignup" component={AdminSignUp} />
      <Route path="/adminlogin" component={AdminLogIn} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;