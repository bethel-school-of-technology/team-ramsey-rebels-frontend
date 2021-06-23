import React from "react";
import Navigation from "./Nav/Navigation";
import { Container, Row, Col, Image } from "react-bootstrap";

const Landing = () => (
  <div>
    <Navigation />
    <Container>
      <div className="landing-bg"></div>
    </Container>
  </div>
);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
