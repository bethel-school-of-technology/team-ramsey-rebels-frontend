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
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top"/>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Contact;
