import React from "react";
import Navigation from "./Nav/Navigation";
import { Container, Row, Col, Image } from "react-bootstrap";

const Landing = () => (
  <div>
    <Navigation />
    <br />
    <br />
    <h1>Welcome to MechanicNow!</h1>
      <div className="landing-bg"></div>
  </div>
);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
