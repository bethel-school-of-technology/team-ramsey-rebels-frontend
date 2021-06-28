import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
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
import {AuthProvider} from "./contexts/AuthContext"
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
    <Router>
    
      <Route exact path="/" component={Landing} />
      <Route path="/newrequest" component={NewRequest} />
      <Route path="service" component={NewRequest} />
      <Route path="/landing" component={Landing} />
      <Route path="/success" component={Success} />
      <Route path="/about" component={About} />
      <Route path="/contactus" component={Contact} />
      <Route path="/adminsignup" component={AdminSignUp} />
      <Route path="/adminlogin" component={AdminLogIn} />
      <Switch>
        <PrivateRoute exact path="/admin" component={Admin}/>
        <Route path="/admin" component={Admin} />
      </Switch>
      <Footer />
    </Router>
    </AuthProvider>
  );
}

export default App;