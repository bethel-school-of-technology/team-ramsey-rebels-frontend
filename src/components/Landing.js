import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Navigation from "./Nav/Navigation";
import { Container, Row, Col, Image } from "react-bootstrap";

const Landing = () => (
  <div>
    <Navigation />
    <Container>
<<<<<<< HEAD
=======
      <Row>
        <Col fluid>
          <h1>Welcome to MechanicNow!</h1>
        </Col>
      </Row>
>>>>>>> main
      <br />
      <Row>
        <Col>
          <Image
            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80"
<<<<<<< HEAD
            alt="nicecar"
            roundedCircle
            fluid
=======
            roundedCircle
            fluid
            alt="nicecar"
>>>>>>> main
          />
        </Col>
        <Col>
        <br />
          <p>
            Find your way to mechanical nirvana with our industry-standard tire
            changes and lubrication services.
          </p>
        </Col>
      </Row>
      <br />
      <Row>
        <Col sm={6}>
        <br />
          <p>
            There is no one happier to come work on your car than our
            trustworthy mechanics. They do whatever you ask them to do.
            Anything.
          </p>
        </Col>
        <Col sm={6}>
          <Image
            src="https://cdn.crello.com/api/media/small/392799810/stock-photo-selective-focus-happy-mechanic-overalls"
            roundedCircle
            fluid
          />
        </Col>
      </Row>
    </Container>
  </div>
);

Landing.propTypes = {};

Landing.defaultProps = {};

export default Landing;
