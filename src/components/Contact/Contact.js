import React from "react";
import Navigation from "../Nav/Navigation";
import Footer from "../Footer";
import bc from "../images/bc.thumbnail.png";
import mh from "../images/mh.thumbnail.png";
import dz from "../images/dz.thumbnail.png";
import { Card, CardGroup, Container, Jumbotron } from "react-bootstrap";


const Contact = () => (
  <div className="contact-div">
    <Navigation />
    <br />
    <Container>
      <Card className="contact-h2" body>
        <h2>Contact Us</h2>
      </Card>
    </Container>
    <br />
    <CardGroup>
      <Card>
        <Card.Header>
          <h4>Matt Holder</h4>
        </Card.Header>
        <Card.Img src={mh} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            <h4>Director of Marketing and Sales</h4>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <medium className="text-muted">
            Email: matt.holder@mechanicnow.com
          </medium>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Header>
          <h4>Ben Cunningham</h4>
        </Card.Header>
        <Card.Img src={bc} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            <h4>Director of Tire and Lube Services</h4>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <medium className="text-muted">
            Email: ben.cunningham@mechanicnow.com
          </medium>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Header>
          <h4>Dalton Zebrak</h4>
        </Card.Header>
        <Card.Img src={dz} />
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            <h4>Director of Customer Service</h4>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <medium className="text-muted">
            Email: dalton.zebrak@mechanicnow.com
          </medium>
        </Card.Footer>
      </Card>
    </CardGroup>
    <br />
    <Jumbotron>
      <h4>
        Need Help Now? Please email us at (help@mechanicnow.com) or call at
        (615-888-8899)
      </h4>
    </Jumbotron>
    <br />
    <Footer />
  </div>
);

export default Contact;
