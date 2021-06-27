import React from "react";
import Navigation from "../Nav/Navigation";
import {
  Carousel,
  Container,
  Card,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";

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
              We are a full service mobile mechanic shop that comes to you. We
              are highly qualified in muffler work, body repair, lube services
              and more. You can't find anyone who will give you a better overall
              experience. See what people are saying on our testomonials page!
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
