import React from "react";
import Navigation from "../Nav/Navigation";
import { Image, Container, Col, Row, Button, Card } from "react-bootstrap";

function Success() {
  return (
    <div>
      <Navigation />
      <br />
      <br />
      <Container>
        <Card>
          <Card.Header>
            <h2>Success!</h2>
          </Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <Card.Text>
              <Image
                src="https://media.istockphoto.com/vectors/flat-round-check-mark-green-icon-button-tick-symbol-isolated-on-white-vector-id691856234?k=6&m=691856234&s=170667a&w=0&h=mo_DNGrIWbOiF8bAn3Ou-sgudLtP6V5hMulju4z-Aos="
                fluid
                roundedCircle
              />
              <br />
              <br />
              <h5>
                Your request has been submitted! Our elite mechanics are heading
                your way now.
              </h5>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Success;
