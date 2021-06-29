import React from "react";
import Navigation from "../Nav/Navigation";
import {
  Card,
  CardGroup,
  Container,
  Image,
  Jumbotron,
  Button,
} from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <br />
      <br />
      <Jumbotron>
        <Container>
        <h2>Contact Us</h2>
          <p>Rain, snow or shine, we'll be sure that your car is fine.</p>
        </Container>
      </Jumbotron>
      <br />
      <CardGroup>
        <Card>
          <Card.Img variant="top"/>
          <Card.Body>
            <Card.Title>Ben Cunningham</Card.Title>
            <Card.Text>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Director of Tire and Lube Services</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top"/>
          <Card.Body>
            <Card.Title>Matt Holder</Card.Title>
            <Card.Text>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Director Marketing and Sales</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title>Dalton Zebrak</Card.Title>
            <Card.Text>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Director of Customer Service</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Contact;
