import React from "react";
import Navigation from "../Nav/Navigation";
import { Container, Card } from "react-bootstrap";

const About = () => (
  <div>
    <Navigation />
    <br />
    <br />
    <Container>
      <Card>
        <Card.Header>
          <h2>About MechanicNow</h2>
        </Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            <p>
              Thanks for choosing MechanicNow! We are a full service mobile
              mechanic service that comes to you. We are highly qualified in
              muffler work, body repair, and lube services. You can't find
              anyone who will give you a better overall experience and make you
              feel good when it's all over. Plus, you won't find anyone who
              works faster! We do our jobs while you work, so you won't even
              know what just happened.
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  </div>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
