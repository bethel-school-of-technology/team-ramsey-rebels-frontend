import React from "react";
import Navigation from "../Nav/Navigation";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const About = () => (
  <div>
    <Navigation />
    <Container>
      <Row>
        <Col>
<<<<<<< HEAD
          <h2>About MechanicNow</h2>
=======
          <h1>About MechanicNow</h1>
>>>>>>> main
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Image
            src="https://lirp.cdn-website.com/8a746dc6/dms3rep/multi/opt/img_3684-2016x1512_0-640w.jpg"
            roundedCircle
            fluid
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col></Col>
        <Col sm={8}>
          <p>
            Thanks for choosing MechanicNow! We are a full service mobile
            mechanic service that comes to you. We are highly qualified in
            muffler work, body repair, and lube services. You can't find anyone
            who will give you a better overall experience and make you feel good
            when it's all over. Plus, you won't find anyone who works faster! We
            do our jobs while you work, so you won't even know what just
            happened.
          </p>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
<<<<<<< HEAD
          <Button href="/newrequest" className="btn btn-secondary">Schedule My Service</Button>
=======
          <Button href="/newrequest">Schedule My Service</Button>
>>>>>>> main
        </Col>
      </Row>
    </Container>
  </div>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
