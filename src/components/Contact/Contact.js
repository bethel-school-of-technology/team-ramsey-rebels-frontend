import React from "react";
import Navigation from "../Nav/Navigation";
import { Card, Container } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Navigation />
      <br />
      <br />
      <Container>
        <Card>
          <Card.Header>
            <h2>Contact Us</h2>
          </Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              <p>Rain, snow or shine, we'll be sure that your car is fine.</p>
              <p>Please send all complaints to Ben Cunningham: 615.645.6015</p>
              <p>Hours of operation: Tuesdays 9-10 am</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Contact;
